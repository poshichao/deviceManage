package com.experience.deviceManage.repository;

import com.experience.deviceManage.entity.Reserve;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "reserve")
public interface ReserveRepository extends CrudRepository<Reserve, Long> {
}
