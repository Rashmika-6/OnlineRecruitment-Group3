package com.infosys.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.infosys.entities.Appointment;


public interface AppointmentRepository  extends JpaRepository<Appointment,Integer>{
	 @Query("SELECT a FROM Appointment a WHERE a.role.roleId = :roleId")
	    List<Appointment> findAppointmentsByRoleId(@Param("roleId") int roleId);
	 @Query("SELECT a FROM Appointment a WHERE a.student.studentId = :studentId")
	    List<Appointment> findAppointmentsByStudentId(@Param("studentId") int studentId);
}
