package com.example.rifa.controller;

import com.example.rifa.model.Rifa;
import com.example.rifa.service.RifaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rifas")
@CrossOrigin(origins = "http://localhost:3000")
public class RifaController {
    @Autowired
    private RifaService rifaService;

    @GetMapping
    public List<Rifa> getAllRifas() {
        return rifaService.getAllRifas();
    }

    @PostMapping
    public Rifa createRifa(@RequestBody Rifa rifa) {
        return rifaService.createRifa(rifa);
    }

    @PutMapping("/{id}")
    public Rifa updateRifa(@PathVariable Long id, @RequestBody Rifa rifaDetails) {
        return rifaService.updateRifa(id, rifaDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRifa(@PathVariable Long id) {
        rifaService.deleteRifa(id);
        return ResponseEntity.ok().build();
    }
}
