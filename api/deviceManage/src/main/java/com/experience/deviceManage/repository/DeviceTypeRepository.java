package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.DeviceType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "deviceType")
public interface DeviceTypeRepository extends CrudRepository<DeviceType, Long> {
}
