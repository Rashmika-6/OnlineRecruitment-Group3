package com.infosys.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class College {
	
	 
	 public College() {
		 super();
	 }
	 
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int collegeId;
	private String name;
    private String description;
    private String address;
    @OneToOne
    @JoinColumn(name = "role_id")
    private Role role;
	@Override
	public String toString() {
		return "College [collegeId=" + collegeId + ", name=" + name + ", description=" + description + ", address="
				+ address + ", role=" + role + "]";
	}
	public int getCollegeId() {
		return collegeId;
	}
	public void setCollegeId(int collegeId) {
		this.collegeId = collegeId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
   
   

}
