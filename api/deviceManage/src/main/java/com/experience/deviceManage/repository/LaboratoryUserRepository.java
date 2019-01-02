package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.InlineLaboratoryUser;
import com.experience.deviceManage.entity.LaboratoryUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "laboratoryUser", excerptProjection = InlineLaboratoryUser.class)
public interface LaboratoryUserRepository extends CrudRepository<LaboratoryUser, Long> {
    @RestResource(path = "name", rel = "name")
    LaboratoryUser findByName(@Param("name") String name);
}
