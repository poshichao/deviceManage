package com.experience.deviceManage.entity;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineDeviceType", types = DeviceType.class)
public interface InlineDeviceType {
    Long getId();
    String getName();
}
