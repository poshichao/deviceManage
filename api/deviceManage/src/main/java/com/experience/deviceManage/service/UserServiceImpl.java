package com.experience.deviceManage.service;

import com.experience.deviceManage.entity.GeneralUser;
import com.experience.deviceManage.entity.LaboratoryUser;
import com.experience.deviceManage.entity.ManageUser;
import com.experience.deviceManage.entity.RegistrationRequest;
import com.experience.deviceManage.repository.GeneralUserRepository;
import com.experience.deviceManage.repository.LaboratoryUserRepository;
import com.experience.deviceManage.repository.ManageUserRepository;
import com.experience.deviceManage.repository.RegistrationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private GeneralUserRepository generalUserRepository;
    @Autowired
    private LaboratoryUserRepository laboratoryUserRepository;
    @Autowired
    private RegistrationRequestRepository registrationRequestRepository;

    @Override
    public void generalRegister(GeneralUser generalUser) {
        generalUserRepository.save(generalUser);
    }

    @Override
    public void laboratoryRegister(LaboratoryUser laboratoryUser) {
        RegistrationRequest registrationRequest = new RegistrationRequest();
        registrationRequest.setName(laboratoryUser.getName());
        registrationRequest.setPassword(laboratoryUser.getPassword());
        registrationRequest.setEmail(laboratoryUser.getEmail());
        registrationRequestRepository.save(registrationRequest);
    }

    @Override
    public void review(Long id, RegistrationRequest registrationRequest) {
        RegistrationRequest oldRegistrationRequest = registrationRequestRepository.findOne(id);
        oldRegistrationRequest.setStatus(registrationRequest.getStatus());

        if (oldRegistrationRequest.getStatus().equals(RegistrationRequest.AGREE)) {
            LaboratoryUser laboratoryUser = new LaboratoryUser();
            laboratoryUser.setName(oldRegistrationRequest.getName());
            laboratoryUser.setPassword(oldRegistrationRequest.getPassword());
            laboratoryUser.setEmail(oldRegistrationRequest.getEmail());
            laboratoryUser.setLaboratory(oldRegistrationRequest.getLaboratory());
            laboratoryUserRepository.save(laboratoryUser);
        }


        registrationRequestRepository.save(oldRegistrationRequest);
    }

    @Override
    public String login(String name, String password) {

        GeneralUser generalUser = generalUserRepository.findByName(name);
        if (null == generalUser) {
            LaboratoryUser laboratoryUser = laboratoryUserRepository.findByName(name);
            if (null != laboratoryUser) {
                if (laboratoryUser.getPassword().equals(password)) {
                    return String.format("{\"msg\":\"ok\",\"user\":{\"userType\":\"%s\",\"id\":%d}}", "laboratory", laboratoryUser.getId());
                }
            }else{
            }
        } else {
            if (generalUser.getPassword().equals(password)) {
                return String.format("{\"msg\":\"ok\",\"user\":{\"userType\":\"%s\",\"id\":%d}}", "general", generalUser.getId());
            }
        }
        return String.format("{\"msg\":\"%s\"}", "error");
    }

}
