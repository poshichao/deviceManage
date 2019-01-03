package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.Device;
import com.experience.deviceManage.entity.InlineDevice;
import com.experience.deviceManage.entity.Laboratory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

@RepositoryRestResource(path = "device", excerptProjection = InlineDevice.class)
public interface DeviceRepository extends CrudRepository<Device, Long> {
    @RestResource(path = "name", rel = "name")
    List<Device> findByName(@Param("name") String name);

    @RestResource(path = "laboratory", rel = "laboratory")
    List<Device> findByLaboratory_Id(@Param("laboratoryId")Long laboratoryId);

    @RestResource(path = "deviceType", rel = "deviceType")
    List<Device> findByDeviceType_Id(@Param("deviceTypeId")Long deviceTypeId);
}
