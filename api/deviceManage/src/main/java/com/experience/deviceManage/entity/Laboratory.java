package com.experience.deviceManage.entity;

import javax.persistence.*;
import java.util.List;

/**
 * 实验室
 */
@Entity
public class Laboratory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;    // 名称

    @OneToMany
    private List<Device> device;  // 设备

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Device> getDevice() {
        return device;
    }

    public void setDevice(List<Device> device) {
        this.device = device;
    }
}
