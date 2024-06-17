package com.infosys.entities;

public class graduateDTO {
	private int userId;
	private int roleId;
	private int studentId;

    private String studentName;
    private String studentEmail;
    private String studentCollege;
	public graduateDTO() {
		super();
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getStudentEmail() {
		return studentEmail;
	}
	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}
	public String getStudentCollege() {
		return studentCollege;
	}
	public void setStudentCollege(String studentCollege) {
		this.studentCollege = studentCollege;
	}
	public graduateDTO(int userId, int roleId, int studentId, String studentName, String studentEmail,
			String studentCollege) {
		super();
		this.userId = userId;
		this.roleId = roleId;
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentEmail = studentEmail;
		this.studentCollege = studentCollege;
	}
	@Override
	public String toString() {
		return "graduateDTO [userId=" + userId + ", roleId=" + roleId + ", studentId=" + studentId + ", studentName="
				+ studentName + ", studentEmail=" + studentEmail + ", studentCollege=" + studentCollege + "]";
	}

}
