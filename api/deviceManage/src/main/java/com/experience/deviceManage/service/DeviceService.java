package com.experience.deviceManage.service;

import com.experience.deviceManage.entity.Device;

import java.util.List;

public interface DeviceService {
    List<Device> getAllByLaboratoryIdAndDeviceTypeId(Long id, Long deviceTypeId);
}