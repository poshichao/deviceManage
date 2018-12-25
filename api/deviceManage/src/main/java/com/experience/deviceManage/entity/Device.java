package com.experience.deviceManage.entity;

import javax.persistence.*;

/**
 * 设备
 */
@Entity
public class Device {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;            // 设备名
    @ManyToOne
    private DeviceType deviceType;  // 设备类别

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public DeviceType getDeviceType() {
        return deviceType;
    }

    public void setDeviceType(DeviceType deviceType) {
        this.deviceType = deviceType;
    }
}
