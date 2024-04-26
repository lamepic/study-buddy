package edu.miu.studybuddy.Note;


import edu.miu.studybuddy.topic.Topic;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
//@Table(name="notes")
@Entity
public class Note {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    @CreatedDate
    private LocalDateTime createdAt;
    @Column(length = 2000)
    private String content;
    @ManyToOne
    private Topic topic;

    @PrePersist
    protected void prePersist() {
        if (this.createdAt == null) createdAt = LocalDateTime.now();
    }
}
