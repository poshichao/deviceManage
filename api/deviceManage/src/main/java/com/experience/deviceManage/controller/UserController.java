package com.experience.deviceManage.controller;

import com.experience.deviceManage.entity.GeneralUser;
import com.experience.deviceManage.entity.LaboratoryUser;
import com.experience.deviceManage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/general")
    public void GeneralRegister(@RequestBody GeneralUser generalUser) {
        userService.generalRegister(generalUser);
    }
    
    @PostMapping("/laboratory")
    public void LaboratoryRegister(@RequestBody LaboratoryUser laboratoryUser) {
        userService.laboratoryRegister(laboratoryUser);
    }
}
