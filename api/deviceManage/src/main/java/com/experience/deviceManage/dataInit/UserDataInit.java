package com.experience.deviceManage.dataInit;

import com.experience.deviceManage.entity.GeneralUser;
import com.experience.deviceManage.entity.LaboratoryUser;
import com.experience.deviceManage.entity.ManageUser;
import com.experience.deviceManage.repository.GeneralUserRepository;
import com.experience.deviceManage.repository.LaboratoryRepository;
import com.experience.deviceManage.repository.LaboratoryUserRepository;
import com.experience.deviceManage.repository.ManageUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class UserDataInit extends BaseDataInitDataListener {
    @Autowired
    private GeneralUserRepository generalUserRepository;
    @Autowired
    private LaboratoryUserRepository laboratoryUserRepository;
    @Autowired
    private ManageUserRepository manageUserRepository;
    @Autowired
    private LaboratoryRepository laboratoryRepository;
    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        this.addGeneralUser();
        this.addLaboratoryUser();
        this.addManageUser();
    }

    public void addGeneralUser() {
        GeneralUser generalUser = new GeneralUser();
        generalUser.setName("testUser1");
        generalUser.setEmail("123@456.com");
        generalUser.setPassword("123123");
        generalUserRepository.save(generalUser);
    }

    public void addLaboratoryUser() {
        LaboratoryUser laboratoryUser = new LaboratoryUser();
        laboratoryUser.setName("testUser2");
        laboratoryUser.setEmail("123@456.com");
        laboratoryUser.setPassword("123123");
        laboratoryUser.setLaboratory(laboratoryRepository.findOne(1L));
        laboratoryUserRepository.save(laboratoryUser);
    }

    public void addManageUser() {
        ManageUser manageUser = new ManageUser();
        manageUser.setName("admin");
        manageUser.setEmail("123@456.com");
        manageUser.setPassword("admin");
        manageUserRepository.save(manageUser);
    }
}
