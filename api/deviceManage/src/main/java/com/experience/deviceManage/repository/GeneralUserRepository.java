package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.GeneralUser;
import com.experience.deviceManage.entity.InlineGeneralUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "generalUser", excerptProjection = InlineGeneralUser.class)
public interface GeneralUserRepository extends CrudRepository<GeneralUser, Long> {
    @RestResource(path = "name", rel = "name")
    GeneralUser findByName(@Param("name") String name);
}
