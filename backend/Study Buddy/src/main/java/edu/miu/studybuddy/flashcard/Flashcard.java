package edu.miu.studybuddy.flashcard;

import edu.miu.studybuddy.question.Question;
import edu.miu.studybuddy.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Table(name = "flashcards")
@Entity
public class Flashcard {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    @OneToMany(mappedBy = "flashcard", cascade = CascadeType.ALL)
    private List<Question> questions;
    @ManyToOne
    private User user;

}
