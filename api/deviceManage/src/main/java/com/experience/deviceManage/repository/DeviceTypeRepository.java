package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.DeviceType;
import com.experience.deviceManage.entity.InlineDeviceType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "deviceType", excerptProjection = InlineDeviceType.class)
public interface DeviceTypeRepository extends CrudRepository<DeviceType, Long> {
    @RestResource
    DeviceType findByName(@Param("name") String name);
}
