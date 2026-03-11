package com.cropsys.Backend.Services;

import com.cropsys.Backend.Dtos.CropRecommendationDto;
import com.cropsys.Backend.Dtos.CropResponce;

public interface Mlservice {

    CropResponce getPridiction(CropRecommendationDto cropRecommendationDto);

}
