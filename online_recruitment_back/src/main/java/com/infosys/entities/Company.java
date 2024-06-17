package com.infosys.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Company {
	public Company(int companyId, String companyName, String companyDescription, String companyType, String companyAddress,Role role) {
		super();
		this.companyId = companyId;
		this.companyName = companyName;
	    this.companyDescription = companyDescription;
	    this.companyType = companyType;
	    this.companyAddress = companyAddress;
	    this.role = role;
	    }
	
	  public Company() {
		  super();
	  }
		
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int companyId;
    private String companyName;
    private String companyDescription;
    private String companyType;
    private String companyAddress; 
    @OneToOne
    @JoinColumn(name = "role_id")
    private Role role;
    @Override
    public String toString() {
        return "Company [companyId=" + companyId + ", companyName=" + companyName + ", companyDescription=" + companyDescription + ", companyType=" + companyType + ", companyAddress=" + companyAddress + ", role=" + role + "]";
    }
    
   
   public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyDescription() {
        return companyDescription;
    }

    public void setCompanyDescription(String companyDescription) {
        this.companyDescription = companyDescription;
    }

    public String getCompanyType() {
        return companyType;
    }

    public void setCompanyType(String companyType) {
        this.companyType = companyType;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }
    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    
    
}
