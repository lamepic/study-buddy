package edu.miu.studybuddy.user.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class UserResponse {
    private Integer id;
    private String name;
    private String email;
    private LocalDate createdAt;
    private LocalDate updatedAt;
}
