package com.infosys.entities;

// import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
@Entity
public class Job {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int jobId;
	private String jobName;
	private String jobTypeControl;
	private String description;
	private int vacancy;
	private double salary;
	private String company;
	
	
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "roleId")
    private Role roles;
	
	private String location;
	
	public Job() {
		super();
	}

	public Job(int jobId, String jobName, String jobTypeControl, String description, int vacancy, double salary,
			String company, Role roles, String location) {
		super();
		this.jobId = jobId;
		this.jobName = jobName;
		this.jobTypeControl = jobTypeControl;
		this.description = description;
		this.vacancy = vacancy;
		this.salary = salary;
		this.company = company;
		this.roles = roles;
		this.location = location;
	}

	public int getJobId() {
		return jobId;
	}

	public void setJobId(int jobId) {
		this.jobId = jobId;
	}

	public String getJobName() {
		return jobName;
	}

	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	public String getJobTypeControl() {
		return jobTypeControl;
	}

	public void setJobTypeControl(String jobTypeControl) {
		this.jobTypeControl = jobTypeControl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getVacancy() {
		return vacancy;
	}

	public void setVacancy(int vacancy) {
		this.vacancy = vacancy;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public Role getRoles() {
		return roles;
	}

	public void setRoles(Role roles) {
		this.roles = roles;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Job [jobId=" + jobId + ", jobName=" + jobName + ", jobTypeControl=" + jobTypeControl + ", description="
				+ description + ", vacancy=" + vacancy + ", salary=" + salary + ", company=" + company + ", roles="
				+ roles + ", location=" + location + "]";
	}

	
}
