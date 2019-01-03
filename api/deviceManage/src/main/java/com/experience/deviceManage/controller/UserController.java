package com.experience.deviceManage.controller;

import com.experience.deviceManage.entity.GeneralUser;
import com.experience.deviceManage.entity.LaboratoryUser;
import com.experience.deviceManage.entity.RegistrationRequest;
import com.experience.deviceManage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/review/{id}")
    public void review(@PathVariable Long id, @RequestBody RegistrationRequest registrationRequest) {
        userService.review(id, registrationRequest);
    }

    @GetMapping("/login")
    public String login(@RequestParam String name, @RequestParam String password) {
        return userService.login(name, password);
    }
}
