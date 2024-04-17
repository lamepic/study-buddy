import { flashcardQuestions } from "@/lib/types";
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

export async function POST(request: Request) {
  const { name, description } = await request.json();

  const deploymentId = "flashcard";
  const azureApiKey: string = process.env.AZURE_OPENAI_API_KEY as string;
  const endpoint: string = process.env.AZURE_OPENAI_API_ENDPOINT as string;

  const messages = [
    {
      role: "system",
      content:
        "You are an expert in every field and you know how to create questions and answers for any topic, your job is to create flashcards with the specified level of difficulty and give a suitable answer, the question should not be too long and the answer too. put the question an answer in an array object formatted in JSON",
    },
    {
      role: "user",
      content: `I would like you to create flashcards on the topic: ${name} with this description: ${description}`,
    },
  ];

  let result: flashcardQuestions[] = [];

  try {
    const client = new OpenAIClient(
      endpoint,
      new AzureKeyCredential(azureApiKey)
    );

    const completions = await client.getChatCompletions(deploymentId, messages);
    for (const choice of completions.choices) {
      const question = JSON.parse(choice.message?.content as string);
      result.push(question);
    }
  } catch (error) {
    Response.json({ error }, { status: 500 });
  }

  return Response.json({ result });
}
