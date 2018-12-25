package com.experience.deviceManage.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Device {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;    // 设备名

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
