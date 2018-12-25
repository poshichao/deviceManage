package com.experience.deviceManage.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 实验室用户
 */
@Entity
public class LaboratoryUser {
    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;        // 姓名
    private String email;       // 邮箱
    private String password;    // 密码

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
