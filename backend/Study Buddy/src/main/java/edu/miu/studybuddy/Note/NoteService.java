package edu.miu.studybuddy.Note;

import edu.miu.studybuddy.Note.dto.CreateNoteDto;
import edu.miu.studybuddy.Note.dto.NoteDto;
import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import edu.miu.studybuddy.topic.Topic;
import edu.miu.studybuddy.topic.TopicService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    private final NoteRepository noteRepository;
    private final ModelMapper modelMapper;
    private final TopicService topicService;

    public NoteService(NoteRepository noteRepository, ModelMapper modelMapper, TopicService topicService) {
        this.noteRepository = noteRepository;
        this.modelMapper = modelMapper;
        this.topicService = topicService;
    }

    public NoteDto create(CreateNoteDto data, Integer topicId) throws CustomNotFoundException {
        var note = this.noteRepository.save(modelMapper.map(data, Note.class));
        var topic = this.topicService.findTopicById(topicId);
        note.setTopic(topic);
        this.noteRepository.save(note);
        return modelMapper.map(note, NoteDto.class);
    }

    public List<NoteDto> getAll(Integer topicId){
        var result = this.noteRepository.findByTopic_IdOrderByCreatedAt(topicId).stream()
                .map(note -> modelMapper.map(note, NoteDto.class)).toList();
        return result;
    }

    public NoteDto getOne(Integer noteId){
        return modelMapper.map(this.noteRepository.findById(noteId).orElse(null), NoteDto.class);
    }

    public void deleteNote(Integer id){
        var note = this.noteRepository.findById(id).orElse(null);
        assert note != null;
        this.noteRepository.deleteById(note.getId());
    }

    public NoteDto update(NoteDto data, Integer noteId) throws CustomNotFoundException{
        var oldNote = this.noteRepository.findById(noteId).orElseThrow(() -> new CustomNotFoundException("note with id note found"));
        var newNote = modelMapper.map(data, Note.class);
        oldNote.setName(newNote.getName());
        oldNote.setContent(newNote.getContent());
        this.noteRepository.save(oldNote);

        return modelMapper.map(oldNote, NoteDto.class);
    }
}
