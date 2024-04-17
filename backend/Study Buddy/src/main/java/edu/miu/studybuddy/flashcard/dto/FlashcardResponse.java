package edu.miu.studybuddy.flashcard.dto;

import edu.miu.studybuddy.question.Question;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlashcardResponse {
    private Integer id;
    private String name;
    private List<Question> questions;

}
