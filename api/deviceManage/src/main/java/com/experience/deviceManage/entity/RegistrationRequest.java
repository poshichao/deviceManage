package com.experience.deviceManage.entity;

import javax.persistence.*;

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
    private String name;                    // 用户名
    private String password;                // 密码
    private String email;                   // 邮件
    @ManyToOne
    private Laboratory laboratory;          // 实验室

    public Long getId() {
        return id;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Laboratory getLaboratory() {
        return laboratory;
    }

    public void setLaboratory(Laboratory laboratory) {
        this.laboratory = laboratory;
    }
}
