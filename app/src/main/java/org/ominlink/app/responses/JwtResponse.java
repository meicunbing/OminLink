package org.ominlink.app.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * @author meicunbing
 */
@Data
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private Long id;
    private String username;
    private String email;
    private List<String> roles;
}
