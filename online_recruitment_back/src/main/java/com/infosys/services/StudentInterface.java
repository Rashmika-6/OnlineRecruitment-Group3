package com.infosys.services;

import com.infosys.entities.Student;
import java.util.List;

public interface StudentInterface {
    public Student addStudent(Student student);

    public Student getStudentById(int id);
    public List<Student> getAllStudents();
    public Student updateStudent(int id, Student student);
    public void deleteStudentById(int id);
}
