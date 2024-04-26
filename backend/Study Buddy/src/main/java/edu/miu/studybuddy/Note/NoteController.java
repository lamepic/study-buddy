package edu.miu.studybuddy.Note;


import edu.miu.studybuddy.Note.dto.CreateNoteDto;
import edu.miu.studybuddy.Note.dto.NoteDto;
import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("/api/notes")
@RestController
public class NoteController {
    private NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/topic/{topicId}")
    public ResponseEntity<List<NoteDto>> getAll(@PathVariable Integer topicId){
        return ResponseEntity.ok(this.noteService.getAll(topicId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<NoteDto> getOne(@PathVariable Integer id){
        return ResponseEntity.ok(noteService.getOne(id));
    }

    @PostMapping("/{topicId}")
    public ResponseEntity<NoteDto> create(@RequestBody @Valid CreateNoteDto data, @PathVariable int topicId) throws CustomNotFoundException {
        var note = this.noteService.create(data, topicId);
        return new ResponseEntity<>(note, new HttpHeaders(), HttpStatus.CREATED);
    }

    @PutMapping("/{noteId}")
    public ResponseEntity<NoteDto> update(@RequestBody NoteDto data, @PathVariable int noteId) throws CustomNotFoundException {
        var note = this.noteService.update(data, noteId);
        return ResponseEntity.ok(note);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        this.noteService.deleteNote(id);
    }
}
