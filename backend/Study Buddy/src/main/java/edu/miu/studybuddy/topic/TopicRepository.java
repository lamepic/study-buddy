package edu.miu.studybuddy.topic;

import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Integer> {
    List<Topic> findAllByUserId(Integer userId);
    Optional<Topic> findByIdAndUserId(Integer id, Integer userId) throws CustomNotFoundException;
}
