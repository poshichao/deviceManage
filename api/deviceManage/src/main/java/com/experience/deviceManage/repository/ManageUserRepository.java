package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.ManageUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "manageUser")
public interface ManageUserRepository extends CrudRepository<ManageUser, Long> {
    @RestResource(path = "name", rel = "name")
    ManageUser findByName(@Param("name") String name);
}
