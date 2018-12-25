package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.GeneralUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "generalUser")
public interface GeneralUserRepository extends CrudRepository<GeneralUser, Long> {
}
