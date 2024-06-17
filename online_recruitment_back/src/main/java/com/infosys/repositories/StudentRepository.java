package com.infosys.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infosys.entities.Student;


public interface StudentRepository extends JpaRepository<Student, Integer> {
   
}
