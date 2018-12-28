package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.Device;
import com.experience.deviceManage.entity.InlineDevice;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "/device", excerptProjection = InlineDevice.class)
public interface DeviceRepository extends CrudRepository<Device, Long> {
}
