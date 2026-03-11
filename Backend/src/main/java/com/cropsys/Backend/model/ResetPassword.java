package com.cropsys.Backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class ResetPassword {

    private String email;
    private String newPassword;
    private String confirmPassword;
}