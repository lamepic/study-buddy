package edu.miu.studybuddy.auth;

import edu.miu.studybuddy.auth.dto.LoginUserDto;
import edu.miu.studybuddy.auth.dto.RegisterUserDto;
import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import edu.miu.studybuddy.user.User;
import edu.miu.studybuddy.user.UserService;
import edu.miu.studybuddy.user.dto.UserResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserService userService;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    public AuthService(
            UserService userService,
            AuthenticationManager authenticationManager,
            PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponse register(RegisterUserDto data) {
        User user = User.builder()
                .name(data.getName())
                .email(data.getEmail())
                .password(passwordEncoder.encode(data.getPassword())).build();
        return userService.create(user);
    }

    public User authenticate(LoginUserDto data) throws CustomNotFoundException {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        data.getEmail(),
                        data.getPassword()
                )
        );
        return userService.findUserByEmail(data.getEmail());
    }
}
