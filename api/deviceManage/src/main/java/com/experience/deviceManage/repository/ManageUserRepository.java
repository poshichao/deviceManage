package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.ManageUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "manageUser")
public interface ManageUserRepository extends CrudRepository<ManageUser, Long> {
}
