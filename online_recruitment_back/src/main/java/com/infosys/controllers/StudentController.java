package com.infosys.controllers;

import com.infosys.entities.Student;
import com.infosys.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:4200")
@RestController
public class StudentController {

    @Autowired
    StudentService service;

    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @GetMapping("/students/{id}")
    public Student getStudentById(@PathVariable("id") int id) {
        return service.getStudentById(id);
    }

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    @PutMapping("/students/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {
        return service.updateStudent(id, student);
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudentById(@PathVariable int id) {
        service.deleteStudentById(id);
    }
}
