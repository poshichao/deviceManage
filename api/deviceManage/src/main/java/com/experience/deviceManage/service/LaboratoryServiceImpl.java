package com.experience.deviceManage.service;

import com.experience.deviceManage.entity.Laboratory;
import com.experience.deviceManage.repository.LaboratoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LaboratoryServiceImpl implements LaboratoryService {
    @Autowired
    LaboratoryRepository laboratoryRepository;

    @Override
    public Laboratory getOneSavedObject() {
        Laboratory laboratory = new Laboratory();
        laboratory.setName("测试实验室");
        laboratory.setIntroduction("这是一段简介这是一段简介");
        return laboratoryRepository.save(laboratory);
    }
}
