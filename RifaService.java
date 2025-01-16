package com.example.rifa.service;

import com.example.rifa.model.Rifa;
import com.example.rifa.repository.RifaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RifaService {
    @Autowired
    private RifaRepository rifaRepository;

    public List<Rifa> getAllRifas() {
        return rifaRepository.findAll();
    }

    public Rifa createRifa(Rifa rifa) {
        return rifaRepository.save(rifa);
    }

    public Rifa updateRifa(Long id, Rifa rifaDetails) {
        Rifa rifa = rifaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Rifa não encontrada"));
        rifa.setNome(rifaDetails.getNome());
        rifa.setDescricao(rifaDetails.getDescricao());
        rifa.setPreco(rifaDetails.getPreco());
        rifa.setQuantidade(rifaDetails.getQuantidade());
        return rifaRepository.save(rifa);
    }

    public void deleteRifa(Long id) {
        rifaRepository.deleteById(id);
    }
}
