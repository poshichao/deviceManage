package com.experience.deviceManage.entity;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineLaboratory", types = {Device.class})
public interface InlineLaboratory {
    Laboratory getLaboratory();
    DeviceType getDeviceType();
    String getName();
}
