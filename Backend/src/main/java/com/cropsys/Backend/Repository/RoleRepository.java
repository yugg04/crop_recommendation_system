package com.cropsys.Backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropsys.Backend.model.AppRole;
import com.cropsys.Backend.model.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByRoleName(AppRole roleName);
    

}
