package edu.miu.studybuddy.user;


import edu.miu.studybuddy.user.dto.UserResponse;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RequestMapping("/api/users")
@RestController
public class UserController {
    private UserService userService;
    private ModelMapper modelMapper;

    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> profile(){
        UserResponse user = modelMapper.map(userService.getAuthenticatedUser(), UserResponse.class);
        return ResponseEntity.ok(user);
    }
}
