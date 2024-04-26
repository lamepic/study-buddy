import Header from "@/components/Header";
import FlashcardItemList from "@/components/List/FlashcardItemList";
import CreateFlashcardModal from "@/components/Modal/CreateFlashcardModal";

function FlashcardPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header title="Flashcards">
        <CreateFlashcardModal topicId={params.id} />
      </Header>
      <div className="mt-5 h-full">
        <FlashcardItemList />
      </div>
    </>
  );
}

export default FlashcardPage;
