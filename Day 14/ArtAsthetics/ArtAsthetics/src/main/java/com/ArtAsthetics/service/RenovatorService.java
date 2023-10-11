package com.ArtAsthetics.service;


import com.ArtAsthetics.entity.Renovators;
import com.ArtAsthetics.repository.RenovatorsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RenovatorService {

    @Autowired
    RenovatorsRepo ReRepo;

    public boolean addRenovator(Renovators a) {

        Renovators Renovator = Renovators.builder()
                .rid(a.getRid())
                .name(a.getName())
                .phno(a.getPhno())
                .dtype(a.getDtype())
                .build();

        ReRepo.save(Renovator);
        return true;
    }
    public List<Renovators> showRenovators(){
        return ReRepo.findAll();
    }

    public String deleteRenovator(int id){
        ReRepo.deleteById(id);
        return "Deleted the Renovator ID "+id;
    }

    public Renovators updateRenovatorDet(Renovators a){
        Renovators updatedDetails = new Renovators();
        updatedDetails.setDtype(a.getDtype());
        updatedDetails.setPhno(a.getPhno());
        updatedDetails.setName(a.getName());
        updatedDetails.setRid(a.getRid());
        return updatedDetails;
    }



}
