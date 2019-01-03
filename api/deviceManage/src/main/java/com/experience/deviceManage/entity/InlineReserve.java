package com.experience.deviceManage.entity;

import org.springframework.data.rest.core.config.Projection;

import java.util.Date;

@Projection(name = "inlineReserve", types = Reserve.class)
public interface InlineReserve {
    Long getId();
    Date getStartTime();
    Date getEndTime();
    String getPhone();
    Byte getStatus();
    Device getDevice();
    String getComment();
    GeneralUser getGeneralUser();
}
