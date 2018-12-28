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

@RepositoryRestResource(path = "/device", excerptProjection = InlineDevice.class)
public interface DeviceRepository extends CrudRepository<Device, Long> {

    List<Device> findAllByLaboratory_Id(@Param("id")Long id);
}
