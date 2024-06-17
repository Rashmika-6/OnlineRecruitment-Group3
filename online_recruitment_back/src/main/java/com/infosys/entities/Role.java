package com.infosys.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
// import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity

public class Role {
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int roleId;
	private String roleTitle;
	private String roleDesc;
	
	@OneToOne(mappedBy = "role" )
	@JsonIgnore
	private User user;

    
	@OneToOne(mappedBy = "role")
	@JsonIgnore
    private Company company;
	
	@JsonIgnore
	@OneToOne(mappedBy="role")
    private Student student;
	
	@OneToOne(mappedBy = "role")
	@JsonIgnore
    private College college;

	
	@JsonIgnore
	@OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
    private List<Appointment> appointment = new ArrayList<>();
	

	
	public Role() {
		super();
	}


	@JsonIgnore
	@OneToMany(mappedBy = "roles", cascade = CascadeType.ALL)
    private List<Job> job = new ArrayList<>();



	@Override
	public String toString() {
		return "Role [roleId=" + roleId + ", roleTitle=" + roleTitle + ", roleDesc=" + roleDesc + ", user=" + user
				+ ", company=" + company + ", student=" + student + ", college=" + college + ", appointment="
				+ appointment + ", job=" + job + "]";
	}



	public int getRoleId() {
		return roleId;
	}



	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}



	public String getRoleTitle() {
		return roleTitle;
	}



	public void setRoleTitle(String roleTitle) {
		this.roleTitle = roleTitle;
	}



	public String getRoleDesc() {
		return roleDesc;
	}



	public void setRoleDesc(String roleDesc) {
		this.roleDesc = roleDesc;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	public Company getCompany() {
		return company;
	}



	public void setCompany(Company company) {
		this.company = company;
	}



	public Student getStudent() {
		return student;
	}



	public void setStudent(Student student) {
		this.student = student;
	}



	public College getCollege() {
		return college;
	}



	public void setCollege(College college) {
		this.college = college;
	}



	public List<Appointment> getAppointment() {
		return appointment;
	}



	public void setAppointment(List<Appointment> appointment) {
		this.appointment = appointment;
	}



	public List<Job> getJob() {
		return job;
	}



	public void setJob(List<Job> job) {
		this.job = job;
	}



	public Role(int roleId, String roleTitle, String roleDesc, User user, Company company, Student student,
			College college, List<Appointment> appointment, List<Job> job) {
		super();
		this.roleId = roleId;
		this.roleTitle = roleTitle;
		this.roleDesc = roleDesc;
		this.user = user;
		this.company = company;
		this.student = student;
		this.college = college;
		this.appointment = appointment;
		this.job = job;
	}



	
	

	
	
}

	


