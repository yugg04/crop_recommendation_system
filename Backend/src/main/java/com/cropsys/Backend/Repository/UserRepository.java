package com.cropsys.Backend.Repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropsys.Backend.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

  

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    
}
