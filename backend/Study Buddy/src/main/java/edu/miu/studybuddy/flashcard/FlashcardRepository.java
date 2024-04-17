package edu.miu.studybuddy.flashcard;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FlashcardRepository extends JpaRepository<Flashcard, Integer> {
    List<Flashcard> findAllByUserId(Integer id);
    Flashcard findByIdAndUserId(Integer id, Integer userId);
}
