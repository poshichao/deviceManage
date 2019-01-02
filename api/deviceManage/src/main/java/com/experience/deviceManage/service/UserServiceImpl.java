package com.experience.deviceManage.service;

import com.experience.deviceManage.entity.GeneralUser;
import com.experience.deviceManage.entity.LaboratoryUser;
import com.experience.deviceManage.repository.GeneralUserRepository;
import com.experience.deviceManage.repository.LaboratoryUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private GeneralUserRepository generalUserRepository;
    @Autowired
    private LaboratoryUserRepository laboratoryUserRepository;

    @Override
    public void generalRegister(GeneralUser generalUser) {
        generalUserRepository.save(generalUser);
    }

    @Override
    public void laboratoryRegister(LaboratoryUser laboratoryUser) {
        laboratoryUserRepository.save(laboratoryUser);
    }


}
