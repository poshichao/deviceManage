package com.experience.deviceManage.entity;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineDevice", types = {Device.class})
public interface InlineDevice {
    Long getId();
    Laboratory getLaboratory();
    DeviceType getDeviceType();
    String getName();
}
