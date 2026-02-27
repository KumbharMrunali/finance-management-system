package com.SpringBoot.main.service;

import com.SpringBoot.main.model.User;

public interface UserService {
    User register(User user);
    User login(String email, String password);
}