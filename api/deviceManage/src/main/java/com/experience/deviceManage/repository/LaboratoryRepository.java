package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.Laboratory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "laboratory")
public interface LaboratoryRepository extends CrudRepository<Laboratory, Long> {
}
