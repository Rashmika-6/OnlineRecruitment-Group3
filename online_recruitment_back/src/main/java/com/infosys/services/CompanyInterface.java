package com.infosys.services;

import com.infosys.entities.Company;
import java.util.List;

public interface CompanyInterface {
    public Company addCompany(Company company);
    
    public Company getCompanyById(int id);
    public List<Company> getAllCompanies();
    public Company updateCompany(int id, Company company);
    public void deleteCompanyById(int id);
    public Company getCompanyByRoleId(int roleId);
}
