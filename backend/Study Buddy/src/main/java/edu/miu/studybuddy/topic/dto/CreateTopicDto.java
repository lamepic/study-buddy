package edu.miu.studybuddy.topic.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateTopicDto {
    @NotBlank(message = "Name is required")
    private String name;
}

