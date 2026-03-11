package com.cropsys.Backend.Services;

import java.util.List;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.cropsys.Backend.Dtos.BestCropResponse;
import com.cropsys.Backend.Dtos.CropHistoryDto;
import com.cropsys.Backend.Dtos.CropRecommendationDto;
import com.cropsys.Backend.Dtos.CropResponce;
import com.cropsys.Backend.Repository.CropHistoryRepository;
import com.cropsys.Backend.Repository.UserRepository;
import com.cropsys.Backend.model.CropHistory;
import com.cropsys.Backend.model.User;

@Service
public class HistoryServiceimpl implements HistoryService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CropHistoryRepository cropHistoryRepository;

    @Autowired
    private Mlservice mlservice;

    @Override
    @Transactional
    public BestCropResponse predictAndSave(
            CropRecommendationDto dto,
            Authentication authentication) {

        // 1️⃣ Fail fast – NEVER allow null authentication
        if (authentication == null) {
            throw new RuntimeException("Unauthenticated request. JWT missing or invalid.");
        }

        // 2️⃣ Call ML service
        CropResponce res = mlservice.getPridiction(dto);
        if (res == null || res.recommended_crop == null) {
            throw new RuntimeException("Prediction failed");
        }

        // 3️⃣ Extract user identity (JWT-safe way)
        String email = authentication.getName(); // DO NOT use getPrincipal()
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 4️⃣ Build and persist history
        CropHistory history = new CropHistory();
        history.setN(dto.getN());
        history.setP(dto.getP());
        history.setK(dto.getK());
        history.setTemperature(dto.getTemperature());
        history.setHumidity(dto.getHumidity());
        history.setPh(dto.getPh());
        history.setRainfall(dto.getRainfall());
        history.setCrop(res.recommended_crop);
        history.setProbability(res.confidence_percent);
        history.setUser(user);

        cropHistoryRepository.save(history); // 🔥 WILL EXECUTE NOW

        // 5️⃣ Build response
        BestCropResponse response = new BestCropResponse();
        response.setCrop(res.recommended_crop);
        response.setProbability(res.confidence_percent);

        return response;
    }

    @Override
    public List<CropHistoryDto> getAllHistory(Authentication authentication) {
        if (authentication != null &&
                authentication.getPrincipal() instanceof UserDetails) {

            String email = authentication.getName();
            User user = userRepository.findByEmail(email).orElse(null);

            List<CropHistory> histories = cropHistoryRepository.findAllByUser(user);

            return histories.stream().map(history -> {
                CropHistoryDto dto = new CropHistoryDto();
                dto.setId(history.getId());
                dto.setN(history.getN());
                dto.setP(history.getP());
                dto.setK(history.getK());
                dto.setTemperature(history.getTemperature());
                dto.setHumidity(history.getHumidity());
                dto.setPh(history.getPh());
                dto.setRainfall(history.getRainfall());
                dto.setCrop(history.getCrop());
                dto.setProbability(history.getProbability());
                dto.setDate(history.getDate());
                return dto;
            }).toList();

        }

        return List.of();
    }
}