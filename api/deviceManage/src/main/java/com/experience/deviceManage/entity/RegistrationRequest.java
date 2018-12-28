package com.experience.deviceManage.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 注册请求
 */
@Entity
public class RegistrationRequest {
    public final static Byte UNPROCESSED = 0;   // 未处理
    public final static Byte AGREE = 1;         // 同意
    public final static Byte REFUSE = -1;       // 拒绝
    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Byte status = UNPROCESSED;    // 状态,默认未受理

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }
}
