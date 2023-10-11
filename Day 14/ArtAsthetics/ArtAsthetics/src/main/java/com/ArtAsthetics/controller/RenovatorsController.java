package com.ArtAsthetics.controller;


import com.ArtAsthetics.entity.Renovators;
import com.ArtAsthetics.service.RenovatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RenovatorsController {

    @Autowired
    RenovatorService RenovatorServ;

    @GetMapping("/allRenovators")
    public ResponseEntity<List<Renovators>> getAllProducts() {
        List<Renovators> RenovatorsList = RenovatorServ.showRenovators();
        return !RenovatorsList.isEmpty() ? ResponseEntity.status(200).body(RenovatorsList)
                : ResponseEntity.noContent().build();
    }

    @PostMapping("/saveRenovator")
    public ResponseEntity<String> saveProduct(@RequestBody Renovators a) {
        boolean isSaved = RenovatorServ.addRenovator(a);
        return isSaved ? ResponseEntity.status(201).body("Renovator added successfully!")
                : ResponseEntity.badRequest().build();
    }

}
