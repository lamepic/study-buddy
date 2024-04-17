package edu.miu.studybuddy.question;

import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import edu.miu.studybuddy.question.dto.CreateQuestionDto;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final ModelMapper modelMapper;

    public QuestionService(QuestionRepository questionRepository, ModelMapper modelMapper) {
        this.questionRepository = questionRepository;
        this.modelMapper = modelMapper;
    }

    public Question create(CreateQuestionDto data){
        Question toQuestion = modelMapper.map(data, Question.class);
        return this.questionRepository.save(toQuestion);
    }

    public Question getOne(Integer id) throws CustomNotFoundException{
        return this.questionRepository.findById(id)
                .orElseThrow(() -> new CustomNotFoundException("Question with id not found"));
    }

    public List<Question> getAll(){
        return this.questionRepository.findAll();
    }
}
