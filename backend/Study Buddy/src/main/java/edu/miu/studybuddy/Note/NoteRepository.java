package edu.miu.studybuddy.Note;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Integer> {
//    @Query("select n from Note n where n.topic.id = :topicId order by n.createdAt asc")
    List<Note> findByTopic_IdOrderByCreatedAt(Integer topicId);
}
