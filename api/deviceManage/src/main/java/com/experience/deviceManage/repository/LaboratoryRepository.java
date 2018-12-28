package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.InlineDevice;
import com.experience.deviceManage.entity.InlineLaboratory;
import com.experience.deviceManage.entity.Laboratory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "laboratory", excerptProjection = InlineLaboratory.class)
public interface LaboratoryRepository extends CrudRepository<Laboratory, Long> {
}
