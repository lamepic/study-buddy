package edu.miu.studybuddy.flashcard;

import edu.miu.studybuddy.flashcard.dto.CreateManyFlashcardDto;
import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import edu.miu.studybuddy.flashcard.dto.CreateFlashcardDto;
import edu.miu.studybuddy.flashcard.dto.FlashcardResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RequestMapping("/api/flashcards")
@RestController
public class FlashcardController {
    private final FlashcardService flashcardService;
    public FlashcardController(FlashcardService flashcardService) {
        this.flashcardService = flashcardService;
    }


    @PostMapping("/{topicId}")
    public ResponseEntity<FlashcardResponse> create(@PathVariable Integer topicId, @RequestBody @Valid CreateFlashcardDto data) throws CustomNotFoundException {
        return new ResponseEntity<>(this.flashcardService.create(data, topicId), new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/topic/{topicId}")
    public ResponseEntity<HashMap<String, List<FlashcardResponse>>> getAll(@PathVariable Integer topicId){
        var response = new HashMap<String, List<FlashcardResponse>>();
        response.put("flashcards", this.flashcardService.getAll(topicId));
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlashcardResponse> getOne(@PathVariable Integer id) throws CustomNotFoundException {
        return ResponseEntity.ok(this.flashcardService.getOne(id));
    }

    @PutMapping("/{id}/topic/{topicId}")
    public ResponseEntity<FlashcardResponse> updateOne(@PathVariable Integer id, @PathVariable Integer topicId, @RequestBody @Valid CreateFlashcardDto data) throws CustomNotFoundException {
        return ResponseEntity.ok(this.flashcardService.updateOne(id, topicId, data));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOne(@PathVariable Integer id){
        this.flashcardService.deleteOne(id);
        return new ResponseEntity<>(null, new HttpHeaders(), HttpStatus.NO_CONTENT);
    }
}
