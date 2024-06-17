package com.infosys.controllers;

import com.infosys.entities.College;
import com.infosys.services.CollegeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:4200")
@RestController
public class CollegeController {

    @Autowired
    CollegeService service;

    @PostMapping("/addColleges")
    public College addCollege(@RequestBody College college) {
        return service.addCollege(college);
    }

    @GetMapping("/colleges/{id}")
    public College getCollegeById(@PathVariable int id) {
        return service.getCollegeById(id);
    }

    @GetMapping("/colleges")
    public List<College> getAllColleges() {
        return service.getAllColleges();
    }

    @PutMapping("/colleges/{id}")
    public College updateCollege(@PathVariable int id, @RequestBody College college) {
        return service.updateCollege(id, college);
    }

    @DeleteMapping("/colleges/{id}")
    public void deleteCollegeById(@PathVariable int id) {
        service.deleteCollegeById(id);
    }
}

