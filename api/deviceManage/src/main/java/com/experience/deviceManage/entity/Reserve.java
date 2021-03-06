package com.experience.deviceManage.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * 预约
 */
@Entity
public class Reserve {
    private final static Byte UNEXAMINE = 0;    // 未处理
    private final static Byte AGREE = 1;        // 同意，但未完成
    private final static Byte DISAGREE = -1;    // 不同意
    private final static Byte FINISH = 2;       // 同意，并且预约结束
    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date startTime; // 开始时间
    private Date endTime;   // 结束时间
    private String phone;   // 预留手机号
    private Byte status = UNEXAMINE;    // 预约状态
    private String comment; // 评价

    @ManyToOne
    private Device device;

    @ManyToOne
    private GeneralUser generalUser;

    public Long getId() {
        return id;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public GeneralUser getGeneralUser() {
        return generalUser;
    }

    public void setGeneralUser(GeneralUser generalUser) {
        this.generalUser = generalUser;
    }
}
