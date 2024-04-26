package edu.miu.studybuddy.topic;

import edu.miu.studybuddy.Note.Note;
import edu.miu.studybuddy.flashcard.Flashcard;
import edu.miu.studybuddy.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "topics")
@Entity
public class Topic {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    @ManyToOne()
    private User user;
    @OneToMany(mappedBy = "topic", cascade = CascadeType.ALL)
    private List<Flashcard> flashcards;
    @OneToMany(mappedBy = "topic", cascade = CascadeType.ALL)
    private List<Note> notes;
}
