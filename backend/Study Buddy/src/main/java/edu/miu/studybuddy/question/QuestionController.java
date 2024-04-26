package edu.miu.studybuddy.question;

import edu.miu.studybuddy.question.dto.QuestionResponseDto;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("/api/questions")
@RestController
public class QuestionController {
    private final QuestionService questionService;
    private final ModelMapper modelMapper;

    public QuestionController(QuestionService questionService, ModelMapper modelMapper) {
        this.questionService = questionService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/{flashcardId}")
    public ResponseEntity<List<QuestionResponseDto>> getFlashcardQuestions(@PathVariable Integer flashcardId){
        var result = questionService.getFlashcardQuestions(flashcardId).stream()
                .map(flashcard -> modelMapper.map(flashcard, QuestionResponseDto.class)).toList();
        return ResponseEntity.ok(result);
    }
}
