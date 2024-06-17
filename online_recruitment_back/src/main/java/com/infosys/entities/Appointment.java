package com.infosys.entities;

// import java.io.File;
// import java.util.Set;
import java.util.Arrays;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
// import jakarta.persistence.Column;
// import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
// import jakarta.persistence.OneToOne;

@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int appointmentId;
	

	
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name="studentId")
	private Student student;
	
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "roleId")
	private Role role;
	
	private String studentName;

	private String Email;
	private String language;
	private String phoneNo;
	private int yop;
	private float percentage;
	private String status;
	
	
	
	private String projects;
	@Lob
	@Column(name="resume" , length=1000000000)
	private byte[] Resume;
	
	

public Appointment() {
		super();
	}



public int getAppointmentId() {
	return appointmentId;
}



public void setAppointmentId(int appointmentId) {
	this.appointmentId = appointmentId;
}



public Student getStudent() {
	return student;
}



public void setStudent(Student student) {
	this.student = student;
}



public Role getRole() {
	return role;
}



public void setRole(Role role) {
	this.role = role;
}



public String getStudentName() {
	return studentName;
}



public void setStudentName(String studentName) {
	this.studentName = studentName;
}



public String getEmail() {
	return Email;
}



public void setEmail(String email) {
	Email = email;
}



public String getLanguage() {
	return language;
}



public void setLanguage(String language) {
	this.language = language;
}



public String getPhoneNo() {
	return phoneNo;
}



public void setPhoneNo(String phoneNo) {
	this.phoneNo = phoneNo;
}



public int getYop() {
	return yop;
}



public void setYop(int yop) {
	this.yop = yop;
}



public float getPercentage() {
	return percentage;
}



public void setPercentage(float percentage) {
	this.percentage = percentage;
}



public String getStatus() {
	return status;
}



public void setStatus(String status) {
	this.status = status;
}



public String getProjects() {
	return projects;
}



public void setProjects(String projects) {
	this.projects = projects;
}



public byte[] getResume() {
	return Resume;
}



public void setResume(byte[] resume) {
	Resume = resume;
}



public Appointment(int appointmentId, Student student, Role role, String studentName, String email, String language,
		String phoneNo, int yop, float percentage, String status, String projects, byte[] resume) {
	super();
	this.appointmentId = appointmentId;
	this.student = student;
	this.role = role;
	this.studentName = studentName;
	Email = email;
	this.language = language;
	this.phoneNo = phoneNo;
	this.yop = yop;
	this.percentage = percentage;
	this.status = status;
	this.projects = projects;
	Resume = resume;
}



@Override
public String toString() {
	return "Appointment [appointmentId=" + appointmentId + ", student=" + student + ", role=" + role + ", studentName="
			+ studentName + ", Email=" + Email + ", language=" + language + ", phoneNo=" + phoneNo + ", yop=" + yop
			+ ", percentage=" + percentage + ", status=" + status + ", projects=" + projects + ", Resume="
			+ Arrays.toString(Resume) + "]";
}






}
