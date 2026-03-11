package com.cropsys.Backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropsys.Backend.model.CropHistory;
import com.cropsys.Backend.model.User;

public interface CropHistoryRepository extends JpaRepository<CropHistory,Long> {

    List<CropHistory> findAllByUser(User user);

   

    
}
