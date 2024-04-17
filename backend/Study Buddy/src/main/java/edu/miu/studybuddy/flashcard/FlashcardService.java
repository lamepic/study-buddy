package edu.miu.studybuddy.flashcard;

import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import edu.miu.studybuddy.flashcard.dto.CreateFlashcardDto;
import edu.miu.studybuddy.flashcard.dto.FlashcardResponse;
import edu.miu.studybuddy.user.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlashcardService {
    private final FlashcardRepository flashcardRepository;
    private final ModelMapper modelMapper;
    private final UserService userService;
    public FlashcardService(
            FlashcardRepository flashcardRepository,
            ModelMapper modelMapper,
            UserService userService
    ) {
        this.flashcardRepository = flashcardRepository;
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    public FlashcardResponse create(CreateFlashcardDto data){
        Flashcard toFlashcard = modelMapper.map(data, Flashcard.class);
        toFlashcard.setUser(userService.getAuthenticatedUser());
        Flashcard saved = this.flashcardRepository.save(toFlashcard);
        return modelMapper.map(saved, FlashcardResponse.class);
    }

    public List<FlashcardResponse> getAll(){
//        System.out.println(userService.getAuthenticatedUser().getId());
        return this.flashcardRepository.findAllByUserId(userService.getAuthenticatedUser().getId())
                .stream()
                .map(flashcard -> modelMapper.map(flashcard, FlashcardResponse.class))
                .toList();
    }

    public FlashcardResponse getOne(Integer id) throws CustomNotFoundException {
        Flashcard flashcard = this.flashcardRepository.findByIdAndUserId(id, userService.getAuthenticatedUser().getId());
        if (flashcard == null) throw new CustomNotFoundException("Flashcard with id not found");
        return modelMapper.map(flashcard, FlashcardResponse.class);
    }

    public FlashcardResponse updateOne(Integer id, CreateFlashcardDto data) throws CustomNotFoundException {
        Flashcard flashcard = this.flashcardRepository.findByIdAndUserId(id, userService.getAuthenticatedUser().getId());
        if (flashcard == null) throw new CustomNotFoundException("Flashcard with id not found");
        flashcard.setName(data.getName());
        Flashcard saved = this.flashcardRepository.save(flashcard);
        return modelMapper.map(saved, FlashcardResponse.class);
    }

    public void deleteOne(Integer id) {
        this.flashcardRepository.deleteById(id);
    }
}
