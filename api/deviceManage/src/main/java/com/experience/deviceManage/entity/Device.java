package com.experience.deviceManage.entity;

import javax.persistence.*;

/**
 * 设备
 */
@Entity
public class Device {
    public static final Byte UNREVIEWED = 0;    // 未审核
    public static final Byte PASS = 1;          // 审核通过
    public static final Byte NOTPASS = -1;      // 审核未通过
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;            // 设备名
    private Byte status = UNREVIEWED;            // 审核状态
    @ManyToOne
    private DeviceType deviceType;  // 设备类别

    @ManyToOne
    private Laboratory laboratory;  // 实验室

    public Long getId() {
        return id;
    }

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

    public Laboratory getLaboratory() {
        return laboratory;
    }

    public void setLaboratory(Laboratory laboratory) {
        this.laboratory = laboratory;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }
}
