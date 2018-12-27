package com.experience.deviceManage.DataInit;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.core.Ordered;

public abstract class BaseDataInitDataListener implements ApplicationListener<ContextRefreshedEvent>, Ordered {
    // 自动加载application.properties中的配置项:spring.jpa.hibernate.ddl-auto
    @Value("create")
    protected String jpaDdlAuto;

    @Override
    public int getOrder() {
        return HIGHEST_PRECEDENCE + 10;
    }
}
