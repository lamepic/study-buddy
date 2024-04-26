package edu.miu.studybuddy.Note.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class NoteDto {
    private Integer id;
    private String name;
    private String content;
//    private LocalDate createdAt;
}
