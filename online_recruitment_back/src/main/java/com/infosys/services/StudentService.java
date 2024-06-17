package com.infosys.services;

import com.infosys.entities.Student;
import com.infosys.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService implements StudentInterface {
@Autowired
 StudentRepository repository;

    @Override
    public Student addStudent(Student student) {
        return repository.save(student);
    }
    
    @Override
    public Student getStudentById(int id) {
        Optional<Student> studentOptional = repository.findById(id);
        return studentOptional.orElse(null);
    }
    
    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }
  
    @Override
    public Student updateStudent(int id, Student student) {
        student.setStudentId(id);
        return repository.save(student);
    }
    
    @Override
    public void deleteStudentById(int id) {
        repository.deleteById(id);
    }
}
