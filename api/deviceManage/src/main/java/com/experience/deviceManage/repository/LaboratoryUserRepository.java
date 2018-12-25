package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.LaboratoryUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "laboratoryUser")
public interface LaboratoryUserRepository extends CrudRepository<LaboratoryUser, Long> {
}
