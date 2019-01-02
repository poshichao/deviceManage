package com.experience.deviceManage.service;

import com.experience.deviceManage.entity.GeneralUser;
import com.experience.deviceManage.entity.LaboratoryUser;
import com.experience.deviceManage.entity.RegistrationRequest;
import com.experience.deviceManage.repository.GeneralUserRepository;
import com.experience.deviceManage.repository.LaboratoryUserRepository;
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
        RegistrationRequest registrationRequest = new RegistrationRequest();
        registrationRequest.setName(generalUser.getName());
        registrationRequest.setPassword(generalUser.getPassword());
        registrationRequest.seteMail(generalUser.getEmail());
        registrationRequest.setGeneral(true);
        registrationRequestRepository.save(registrationRequest);
    }

    @Override
    public void laboratoryRegister(LaboratoryUser laboratoryUser) {
        RegistrationRequest registrationRequest = new RegistrationRequest();
        registrationRequest.setName(laboratoryUser.getName());
        registrationRequest.setPassword(laboratoryUser.getPassword());
        registrationRequest.seteMail(laboratoryUser.getEmail());
        registrationRequest.setGeneral(false);
        registrationRequestRepository.save(registrationRequest);
    }

    @Override
    public void review(Long id, RegistrationRequest registrationRequest) {
        RegistrationRequest oldRegistrationRequest = registrationRequestRepository.findOne(id);
        oldRegistrationRequest.setStatus(registrationRequest.getStatus());
        if (oldRegistrationRequest.getGeneral()) {
            if (oldRegistrationRequest.getStatus().equals(RegistrationRequest.AGREE)) {
                GeneralUser generalUser = new GeneralUser();
                generalUser.setName(oldRegistrationRequest.getName());
                generalUser.setPassword(oldRegistrationRequest.getPassword());
                generalUser.setEmail(oldRegistrationRequest.geteMail());
                generalUserRepository.save(generalUser);
            }
        } else {
            if (oldRegistrationRequest.getStatus().equals(RegistrationRequest.AGREE)) {
                LaboratoryUser laboratoryUser = new LaboratoryUser();
                laboratoryUser.setName(oldRegistrationRequest.getName());
                laboratoryUser.setPassword(oldRegistrationRequest.getPassword());
                laboratoryUser.setEmail(oldRegistrationRequest.geteMail());
                laboratoryUserRepository.save(laboratoryUser);
            }
        }

        registrationRequestRepository.save(oldRegistrationRequest);
    }

}
