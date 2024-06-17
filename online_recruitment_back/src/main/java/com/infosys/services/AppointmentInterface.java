package com.infosys.services;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

// import org.springframework.web.bind.annotation.PathVariable;

import com.infosys.entities.Appointment;
// import com.infosys.entities.Job;

public interface AppointmentInterface {
	public List<Appointment> getAllAppointments();
	public Appointment addAppointment(Appointment appointment);
	public Appointment deleteAppointment(int id);
	public Appointment getAppointmentInfoById(int id);
	public List<Appointment> getAppointmentsByRoleId( int roleId) ;
	 Appointment uploadResume(int appointmentId, MultipartFile file) throws IOException;

	    byte[] downloadResume(int appointmentId);
	    List<Appointment> getAppointmentsByStudentId(int studentId);
	    public  Appointment updateAppointment(int id, Appointment appointment);
}
