package com.infosys.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.infosys.entities.Appointment;
// import com.infosys.entities.Job;
import com.infosys.repositories.AppointmentRepository;

@Service
public class AppointmentService implements AppointmentInterface{
	@Autowired
	AppointmentRepository repository;
	
	@Override
	public List<Appointment> getAllAppointments() {
		
		return repository.findAll();
	}

	@Override
	public Appointment addAppointment(Appointment appointment) {
		
		return repository.save(appointment);
	}
	@Override
    public Appointment getAppointmentInfoById(int id) {
        return repository.findById(id).get();
    }
	 @Override
	    public Appointment deleteAppointment(int id) {
	        Optional<Appointment> appointmentOptional = repository.findById(id);
	        if (appointmentOptional.isPresent()) {
	        	Appointment appointment = appointmentOptional.get();
	            repository.delete(appointment);
	            return appointment;
	        } else {
	            return null; 
	        }
	    }
	 public List<Appointment> getAppointmentsByRoleId(int roleId) {
	        return repository.findAppointmentsByRoleId(roleId);
	    }
	 @Override
	    public Appointment updateAppointment(int id, Appointment appointment) {
	       
	        return repository.save(appointment);
	    }


	    @Override
	    public List<Appointment> getAppointmentsByStudentId(int studentId) {
	        return repository.findAppointmentsByStudentId(studentId);
	    }
	 public Appointment uploadResume(int appointmentId, MultipartFile file) throws IOException {
	        Optional<Appointment> optionalAppointment = repository.findById(appointmentId);
	        if (optionalAppointment.isPresent()) {
	            Appointment appointment = optionalAppointment.get();
	            appointment.setResume(file.getBytes());
	            return repository.save(appointment);
	        }
	        return null;
	    }

	    public byte[] downloadResume(int appointmentId) {
	        Optional<Appointment> optionalAppointment = repository.findById(appointmentId);
	        return optionalAppointment.map(Appointment::getResume).orElse(null);
	    }
	
}
