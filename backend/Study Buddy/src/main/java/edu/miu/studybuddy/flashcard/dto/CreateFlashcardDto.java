package edu.miu.studybuddy.flashcard.dto;

import edu.miu.studybuddy.question.Question;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Data
@Builder
@AllArgsConstructor
public class CreateFlashcardDto {
    @NotBlank(message = "Invalid name: Empty name")
    private String name;
    private List<Question> questions;

    public CreateFlashcardDto(){
        this.questions = new ArrayList<>();
    }
}
