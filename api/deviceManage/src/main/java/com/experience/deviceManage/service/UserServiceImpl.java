package com.experience.deviceManage.service;

import com.experience.deviceManage.entity.GeneralUser;
import com.experience.deviceManage.entity.LaboratoryUser;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Override
    public void generalRegister(GeneralUser generalUser) {
        // todo:普通用户注册
    }

    @Override
    public void laboratoryRegister(LaboratoryUser laboratoryUser) {
        // todo:实验室用户注册
    }
}
