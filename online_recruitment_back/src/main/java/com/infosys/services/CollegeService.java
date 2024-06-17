package com.infosys.services;

import com.infosys.entities.College;
import com.infosys.repositories.CollegeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CollegeService implements CollegeInterface {
@Autowired
CollegeRepository repository;

    @Override
    public College addCollege(College college) {
        return repository.save(college);
    }

    @Override
    public College getCollegeById(int id) {
        Optional<College> collegeOptional = repository.findById(id);
        return collegeOptional.orElse(null);
    }

    @Override
    public List<College> getAllColleges() {
        return repository.findAll();
    }
   
    @Override
    public College updateCollege(int id, College college) {
        college.setCollegeId(id);
        return repository.save(college);
    }

    @Override
    public void deleteCollegeById(int id) {
        repository.deleteById(id);
    }
}
