package com.experience.deviceManage.entity;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineLaboratoryUser", types = LaboratoryUser.class)
public interface InlineLaboratoryUser {
    Long getId();
    String getName();
    String getEmail();
    String getPassword();
}
