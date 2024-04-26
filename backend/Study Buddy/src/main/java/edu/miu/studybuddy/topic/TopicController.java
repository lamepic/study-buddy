package edu.miu.studybuddy.topic;


import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import edu.miu.studybuddy.topic.dto.CreateTopicDto;
import edu.miu.studybuddy.topic.dto.TopicResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin("*")
@RequestMapping("/api/topics")
@RestController
public class TopicController {
    private final TopicService topicService;

    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @PostMapping("")
    public ResponseEntity<TopicResponse> create(@RequestBody @Valid CreateTopicDto data){
        var created = this.topicService.create(data);
        return new ResponseEntity<>(created, new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<HashMap<String, List<TopicResponse>>> findAll(){
        var response = new HashMap<String, List<TopicResponse>>();
        response.put("topics", this.topicService.getAll());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TopicResponse> findOne(@PathVariable Integer id) throws CustomNotFoundException {
        return ResponseEntity.ok(topicService.getOne(id));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void  deleteOne(@PathVariable Integer id){
        topicService.deleteOne(id);
    };
}
