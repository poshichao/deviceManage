package com.experience.deviceManage.dataInit;

import com.experience.deviceManage.entity.DeviceType;
import com.experience.deviceManage.repository.DeviceTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class DeviceTypeDataInit extends BaseDataInitDataListener {
    @Autowired
    private DeviceTypeRepository deviceTypeRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        this.addDeviceType();
    }

    public void addDeviceType() {
        DeviceType deviceType = new DeviceType();
        deviceType.setName("测试设备类别");
        deviceTypeRepository.save(deviceType);
    }
}
