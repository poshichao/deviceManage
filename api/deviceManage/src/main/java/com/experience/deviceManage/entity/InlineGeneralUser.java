package com.experience.deviceManage.entity;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineGeneralUser", types = GeneralUser.class)
public interface InlineGeneralUser {
    Long getId();
    String getName();
    String getEmail();
    String getPassword();
}
