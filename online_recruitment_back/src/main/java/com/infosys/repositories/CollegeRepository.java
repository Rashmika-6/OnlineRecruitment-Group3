package com.infosys.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infosys.entities.College;


public interface CollegeRepository extends JpaRepository<College, Integer> {
   
}
