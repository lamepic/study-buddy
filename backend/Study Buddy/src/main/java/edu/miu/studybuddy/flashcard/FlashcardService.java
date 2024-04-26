package edu.miu.studybuddy.flashcard;

import edu.miu.studybuddy.flashcard.dto.CreateManyFlashcardDto;
import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import edu.miu.studybuddy.flashcard.dto.CreateFlashcardDto;
import edu.miu.studybuddy.flashcard.dto.FlashcardResponse;
import edu.miu.studybuddy.topic.Topic;
import edu.miu.studybuddy.topic.TopicRepository;
import edu.miu.studybuddy.topic.TopicService;
import edu.miu.studybuddy.user.UserService;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlashcardService {
    private final FlashcardRepository flashcardRepository;
    private final ModelMapper modelMapper;
    private final TopicService topicService;
    public FlashcardService(
            FlashcardRepository flashcardRepository,
            ModelMapper modelMapper,
            TopicService topicService
    ) {
        this.flashcardRepository = flashcardRepository;
        this.modelMapper = modelMapper;
        this.topicService = topicService;
    }

//    public List<FlashcardResponse> createMany(List<CreateManyFlashcardDto> data, Integer topicId) throws CustomNotFoundException{
//        Topic topic = topicService.findTopicById(topicId);
//        List<Flashcard> toFlashcards = data.stream()
//                .map(flashcard -> modelMapper.map(flashcard, Flashcard.class))
//                        .peek(flashcard -> flashcard.setTopic(topic)).toList();
//        return flashcardRepository.saveAll(toFlashcards).stream()
//                .map(flashcard -> modelMapper.map(flashcard, FlashcardResponse.class)).toList();
//    }

    public FlashcardResponse create(
            CreateFlashcardDto data, Integer topicId) throws CustomNotFoundException{
        Flashcard toFlashcard = modelMapper.map(data, Flashcard.class);
        System.out.println(toFlashcard);
        toFlashcard.setTopic(topicService.findTopicById(topicId));
        Flashcard saved = this.flashcardRepository.save(toFlashcard);
        saved.getQuestions().forEach(question -> question.setFlashcard(saved));

        return modelMapper.map(this.flashcardRepository.save(saved), FlashcardResponse.class);
    }

    public List<FlashcardResponse> getAll(Integer topicId){
        return this.flashcardRepository.findAllByTopicId(topicId)
                .stream()
                .map(flashcard -> modelMapper.map(flashcard, FlashcardResponse.class))
                .toList();
    }

    public FlashcardResponse getOne(Integer id) throws CustomNotFoundException {
        Flashcard flashcard = this.flashcardRepository.findById(id).orElse(null);
        if (flashcard == null) throw new CustomNotFoundException("Flashcard with id not found");
        return modelMapper.map(flashcard, FlashcardResponse.class);
    }

    public FlashcardResponse updateOne(Integer id, Integer topicId, CreateFlashcardDto data) throws CustomNotFoundException {
        Flashcard flashcard = this.flashcardRepository.findByIdAndTopicId(id, topicId);
        if (flashcard == null) throw new CustomNotFoundException("Flashcard with id not found");
        flashcard.setName(data.getName());
        Flashcard saved = this.flashcardRepository.save(flashcard);
        return modelMapper.map(saved, FlashcardResponse.class);
    }

    public void deleteOne(Integer id) {
        this.flashcardRepository.deleteById(id);
    }
}
