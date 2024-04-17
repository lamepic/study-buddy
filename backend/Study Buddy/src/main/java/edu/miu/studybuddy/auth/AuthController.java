package edu.miu.studybuddy.auth;

import edu.miu.studybuddy.auth.dto.AuthResponse;
import edu.miu.studybuddy.auth.dto.LoginUserDto;
import edu.miu.studybuddy.auth.dto.RegisterUserDto;
import edu.miu.studybuddy.lib.exceptions.CustomNotFoundException;
import edu.miu.studybuddy.lib.services.JwtService;
import edu.miu.studybuddy.user.User;
import edu.miu.studybuddy.user.dto.UserResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/auth")
@RestController
public class AuthController {
    private final JwtService jwtService;
    private final AuthService authService;

    public AuthController(AuthService authService, JwtService jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }

    @PostMapping("/signup")
    public ResponseEntity<UserResponse> register(@RequestBody @Valid RegisterUserDto data){
        UserResponse response = authService.register(data);
        return new ResponseEntity<>(response, new HttpHeaders(), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody @Valid LoginUserDto data) throws CustomNotFoundException {
        User authenticatedUser = authService.authenticate(data);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        AuthResponse response = AuthResponse.builder()
                .access_token(jwtToken)
                .expiresIn(jwtService.getExpirationTime()).build();

        return ResponseEntity.ok(response);
    }
}
