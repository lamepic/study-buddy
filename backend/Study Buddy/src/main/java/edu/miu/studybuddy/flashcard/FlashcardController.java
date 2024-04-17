package edu.miu.studybuddy.flashcard;

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

@RequestMapping("/api/flashcards")
@RestController
public class FlashcardController {
    private final FlashcardService flashcardService;
    public FlashcardController(FlashcardService flashcardService) {
        this.flashcardService = flashcardService;
    }

    @PostMapping("")
    public ResponseEntity<FlashcardResponse> create(@RequestBody @Valid CreateFlashcardDto data){
        return new ResponseEntity<>(this.flashcardService.create(data), new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<HashMap<String, List<FlashcardResponse>>> getAll(){
        var response = new HashMap<String, List<FlashcardResponse>>();
        response.put("flashcards", this.flashcardService.getAll());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlashcardResponse> getOne(@PathVariable Integer id) throws CustomNotFoundException {
        return ResponseEntity.ok(this.flashcardService.getOne(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FlashcardResponse> updateOne(@PathVariable Integer id, @RequestBody @Valid CreateFlashcardDto data) throws CustomNotFoundException {
        return ResponseEntity.ok(this.flashcardService.updateOne(id, data));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOne(@PathVariable Integer id){
        this.flashcardService.deleteOne(id);
        return new ResponseEntity<>(null, new HttpHeaders(), HttpStatus.NO_CONTENT);
    }
}
