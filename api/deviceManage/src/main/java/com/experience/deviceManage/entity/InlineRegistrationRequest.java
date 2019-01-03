package com.experience.deviceManage.entity;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineRegistrationRequest", types = RegistrationRequest.class)
public interface InlineRegistrationRequest {
    Long getId();
    Byte getStatus();
    String getName();
    String getPassword();
    String getEmail();
    Laboratory getLaboratory();
}
