package com.cropsys.Backend.Services;

import java.util.List;

import org.springframework.security.core.Authentication;

import com.cropsys.Backend.Dtos.BestCropResponse;
import com.cropsys.Backend.Dtos.CropHistoryDto;
import com.cropsys.Backend.Dtos.CropRecommendationDto;

public interface HistoryService {


   
    BestCropResponse predictAndSave(CropRecommendationDto dto, Authentication authentication);

    List<CropHistoryDto> getAllHistory(Authentication authentication);

  

  

}
