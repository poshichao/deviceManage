package com.experience.deviceManage.controller;

import com.experience.deviceManage.entity.Device;
import com.experience.deviceManage.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/device")
public class DeviceController {
    @Autowired
    private DeviceService deviceService;

    @GetMapping("/findAllByLaboratoryId/{id}")
    public List<Device> getAllByLaboratoryId(@PathVariable Long id) {
        return deviceService.getAllByLaboratoryId(id);
    }
}
