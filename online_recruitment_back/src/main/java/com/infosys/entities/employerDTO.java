package com.infosys.entities;

public class employerDTO {
	private String userName;
	private int userId;
	private String email;
	private int roleId;
	private String companyName;
	@Override
	public String toString() {
		return "employerDTO [userName=" + userName + ", userId=" + userId + ", email=" + email + ", roleId=" + roleId
				+ ", companyName=" + companyName + "]";
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public employerDTO(String userName, int userId, String email, int roleId, String companyName) {
		super();
		this.userName = userName;
		this.userId = userId;
		this.email = email;
		this.roleId = roleId;
		this.companyName = companyName;
	}
	public employerDTO() {
		super();
	}
	
}
