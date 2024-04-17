package edu.miu.studybuddy.question;

import edu.miu.studybuddy.flashcard.Flashcard;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue
    private Integer id;
    private String question;
    private String answer;
    @ManyToOne
    @JoinColumn(name = "flashcard_id")
    private Flashcard flashcard;
}
