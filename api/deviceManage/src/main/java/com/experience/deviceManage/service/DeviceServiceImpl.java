package com.experience.deviceManage.service;

import com.experience.deviceManage.entity.Device;
import com.experience.deviceManage.repository.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeviceServiceImpl implements DeviceService {
    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public List<Device> getAllByLaboratoryId(Long id) {
        return deviceRepository.findAllByLaboratory_Id(id);
    }
}
