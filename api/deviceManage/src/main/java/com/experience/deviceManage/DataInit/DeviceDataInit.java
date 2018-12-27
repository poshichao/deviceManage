package com.experience.deviceManage.DataInit;

import com.experience.deviceManage.entity.Device;
import com.experience.deviceManage.entity.Laboratory;
import com.experience.deviceManage.repository.DeviceRepository;
import com.experience.deviceManage.service.LaboratoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DeviceDataInit extends BaseDataInitDataListener {
    private List<Device> deviceList = new ArrayList<>();

    @Autowired
    private DeviceRepository deviceRepository;
    @Autowired
    private LaboratoryService laboratoryService;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        this.addDevices();
        deviceRepository.save(deviceList);
    }

    private void addDevices() {
        Laboratory laboratory = laboratoryService.getOneSavedObject();

        Device device = new Device();
        device.setName("123");
        device.setLaboratory(laboratory);
        deviceList.add(device);

        Device device1 = new Device();
        device1.setName("456");
        device1.setLaboratory(laboratory);
        deviceList.add(device1);
    }
}
