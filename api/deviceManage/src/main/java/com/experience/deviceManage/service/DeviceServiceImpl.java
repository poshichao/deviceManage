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
    public List<Device> getAllByLaboratoryIdAndDeviceTypeId(Long id, Long deviceTypeId) {
        return deviceRepository.findAllByLaboratory_IdAndDeviceType_Id(id, deviceTypeId);
    }
}
