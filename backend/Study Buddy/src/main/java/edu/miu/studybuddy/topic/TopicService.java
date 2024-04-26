package edu.miu.studybuddy.topic;

import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import edu.miu.studybuddy.topic.dto.CreateTopicDto;
import edu.miu.studybuddy.topic.dto.TopicResponse;
import edu.miu.studybuddy.user.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {
    private final TopicRepository topicRepository;
    private final ModelMapper modelMapper;
    private final UserService userService;

    public TopicService(TopicRepository topicRepository, ModelMapper modelMapper, UserService userService) {
        this.topicRepository = topicRepository;
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    public TopicResponse create(CreateTopicDto data){
        Topic toTopic = modelMapper.map(data, Topic.class);
        toTopic.setUser(userService.getAuthenticatedUser());
            Topic savedTopic = this.topicRepository.save(toTopic);
        return modelMapper.map(savedTopic, TopicResponse.class);
    }

    public TopicResponse getOne(Integer id) throws CustomNotFoundException {
        Topic topic = topicRepository.findByIdAndUserId(id, userService.getAuthenticatedUser().getId())
                .orElseThrow(() -> new CustomNotFoundException("Topic with id not found"));
        return modelMapper.map(topic, TopicResponse.class);
    }

    public List<TopicResponse> getAll(){
        var topics = topicRepository.findAllByUserId(userService.getAuthenticatedUser().getId());
        return topics.stream().map(topic -> modelMapper.map(topic, TopicResponse.class)).toList();
    }

    public void deleteOne(Integer id){
       topicRepository.deleteById(id);
    }

    public Topic findTopicById(Integer id) throws CustomNotFoundException{
        return topicRepository.findById(id).orElseThrow(() -> new CustomNotFoundException("Topic with id not found"));
    }
}
