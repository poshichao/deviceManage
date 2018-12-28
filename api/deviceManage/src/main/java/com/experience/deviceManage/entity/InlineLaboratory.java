package com.experience.deviceManage.entity;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineLaboratory", types = Laboratory.class)
public interface InlineLaboratory {
    Long getId();
    String getName();
    String getIntroduction();
}
