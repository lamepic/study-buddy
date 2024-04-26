package edu.miu.studybuddy.flashcard.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateManyFlashcardDto {
    @NotNull
    private List<CreateFlashcardDto> flashcards;
}
