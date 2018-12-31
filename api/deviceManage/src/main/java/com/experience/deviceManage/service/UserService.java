package com.experience.deviceManage.service;

import com.experience.deviceManage.entity.GeneralUser;
import com.experience.deviceManage.entity.LaboratoryUser;

public interface UserService {
    void generalRegister(GeneralUser generalUser);

    void laboratoryRegister(LaboratoryUser laboratoryUser);
}
