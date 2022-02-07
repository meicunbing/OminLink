package org.ominlink.app.requests;

import lombok.Data;

import java.util.Set;

/**
 * @author meicunbing
 */
@Data
public class SignupRequest {
    private String username;
    private String email;
    private String password;
    private Set<String> role;
}
