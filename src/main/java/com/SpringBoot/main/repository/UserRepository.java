package com.SpringBoot.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.SpringBoot.main.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);
}