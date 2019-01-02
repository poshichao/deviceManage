package com.experience.deviceManage.service;

import com.experience.deviceManage.entity.GeneralUser;
import com.experience.deviceManage.entity.LaboratoryUser;
import com.experience.deviceManage.entity.RegistrationRequest;

public interface UserService {
    void generalRegister(GeneralUser generalUser);

    void laboratoryRegister(LaboratoryUser laboratoryUser);

    void review(Long id, RegistrationRequest registrationRequest);
}
