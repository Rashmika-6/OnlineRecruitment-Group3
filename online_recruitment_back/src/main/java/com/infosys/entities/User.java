package com.infosys.entities;

// import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

//POJO class- constructor(), getters and setters, toString()

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class User {
	
	
	@Id//primary key of the table
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int userId;
	@OneToOne(cascade =CascadeType.MERGE,fetch = FetchType.EAGER)// to establish a one-to-one relationship between two entity classes, represented by a foreign key constraint
	@JoinColumn(name="roleId")//foreign key-primary key
	private Role role;
	private String userName;
	private String password;
	private String nationality;
	private String mobileNum;
	private String email;
	//private String address;
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	/*public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}*/
	public String getMobileNum() {
		return mobileNum;
	}
	public void setMobileNum(String mobileNum) {
		this.mobileNum = mobileNum;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	/*public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}*/
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	//private String gender;
	//private String nationality;
	
	public User(int userId, Role role, String userName, String password, String dob, String mobileNum, String email
			) {
		super();
		this.userId = userId;
		this.role = role;
		this.userName = userName;
		this.password = password;
		this.nationality=nationality;;
		this.mobileNum = mobileNum;
		this.email = email;
		//this.address = address;
		//this.gender = gender;
		//this.nationality = nationality;
	}
	public User() {
		super();
	}
	

}
