package edu.miu.studybuddy.question;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
    List<Question> findQuestionByFlashcardId(Integer id);
}
