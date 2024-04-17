package edu.miu.studybuddy.user;

import edu.miu.studybuddy.auth.dto.RegisterUserDto;
import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import edu.miu.studybuddy.user.dto.UserResponse;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public UserService(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    public User findUserByEmail(String email) throws CustomNotFoundException {
        return this.userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomNotFoundException("Invalid Credentials"));
    }

    public UserResponse create(User user){
        User createdUser = this.userRepository.save(user);
        return modelMapper.map(createdUser, UserResponse.class);
    }

    public User getAuthenticatedUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return (User) authentication.getPrincipal();
    }
}
