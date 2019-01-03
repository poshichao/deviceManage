package com.experience.deviceManage.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 设备类别
 */
@Entity
public class DeviceType {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;    // 名称

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
