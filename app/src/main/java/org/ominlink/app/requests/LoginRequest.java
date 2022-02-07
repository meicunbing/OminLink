package org.ominlink.app.requests;

import lombok.Data;

/**
 * @author meicunbing
 */
@Data
public class LoginRequest {
    private String username;
    private String password;
}
