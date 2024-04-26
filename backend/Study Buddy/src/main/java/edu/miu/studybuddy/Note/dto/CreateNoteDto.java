package edu.miu.studybuddy.Note.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateNoteDto {
    @NotBlank(message = "Name cannot be blank")
    private String name;
    private String content;
}
