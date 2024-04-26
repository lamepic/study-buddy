package edu.miu.studybuddy.topic.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TopicResponse {
    private Integer id;
    private String name;
}
