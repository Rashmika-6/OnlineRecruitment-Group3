package com.infosys.controllers;

import org.springframework.http.MediaType;

import java.io.IOException;
import org.springframework.http.HttpHeaders;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.infosys.entities.Appointment;

// import com.infosys.entities.Appointment;
// import com.infosys.entities.Appointment;
import com.infosys.services.AppointmentService;


@CrossOrigin("http://localhost:4200")
@RestController
public class AppointmentController {

	@Autowired
	AppointmentService service;
	
	@GetMapping("/getAllAppointments")
	public List<Appointment> getAllAppointments(){
		return service.getAllAppointments();
	}
	
	@PostMapping("/addAppointment")
	public Appointment addAppointment(@RequestBody Appointment appointment) {
		return service.addAppointment(appointment);
	}
	   @DeleteMapping("/{id}")
	    public Appointment deleteAppointment(@PathVariable int id) {
	        return service.deleteAppointment(id);
	    }
	   @PutMapping("/updateAppointment/{id}")
	    public Appointment updateAppointment(@PathVariable("id") int id, @RequestBody Appointment appointment) {
	        return service.updateAppointment(id, appointment);
	    }
	   
	   @GetMapping("/appointmentByRoleId/{roleId}")
	    public List<Appointment> getAppointmentsByRoleId(@PathVariable("roleId") int roleId) {
	        return service.getAppointmentsByRoleId(roleId);
	    }
	   @GetMapping("/appointmentByStudentId/{studentId}")
	    public List<Appointment> getAppointmentsByStudentId(@PathVariable("studentId") int studentId) {
	        return service.getAppointmentsByStudentId(studentId);
	    }
	   @CrossOrigin("http://localhost:4200")
	   @PostMapping("/{id}/uploadResume")
	    public ResponseEntity<String> uploadResume(@PathVariable("id") int id, @RequestParam("file") MultipartFile file) {
	        try {
	            Appointment appointment = service.uploadResume(id, file);
	            if (appointment != null) {
	                return ResponseEntity.ok("Resume uploaded successfully.");
	            } else {
	                return ResponseEntity.status(404).body("Appointment not found.");
	            }
	        } catch (IOException e) {
	            return ResponseEntity.status(500).body("Could not upload resume: " + e.getMessage());
	        }
	    }
	   @CrossOrigin("http://localhost:4200")
	    @GetMapping("/{id}/downloadResume")
	    public ResponseEntity<ByteArrayResource> downloadResume(@PathVariable("id") int id) {
	        byte[] data = service.downloadResume(id);
	        if (data != null) {
	            ByteArrayResource resource = new ByteArrayResource(data);
	            return ResponseEntity.ok()
	                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
	                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"resume_" + id + ".pdf\"")
	                    .body(resource);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
}
