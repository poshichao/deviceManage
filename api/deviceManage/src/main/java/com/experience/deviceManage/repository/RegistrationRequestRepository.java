package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.InlineRegistrationRequest;
import com.experience.deviceManage.entity.RegistrationRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "registrationRequest", excerptProjection = InlineRegistrationRequest.class)
public interface RegistrationRequestRepository extends CrudRepository<RegistrationRequest, Long> {
}
