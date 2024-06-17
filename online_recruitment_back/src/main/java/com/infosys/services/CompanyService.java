package com.infosys.services;

import com.infosys.entities.Company;
import com.infosys.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService implements CompanyInterface {
@Autowired
    CompanyRepository repository;

    @Override
    public Company addCompany(Company company) {
    	
        return repository.save(company);
    }

    @Override
    public Company getCompanyById(int id) {
        Optional<Company> companyOptional = repository.findById(id);
        return companyOptional.orElse(null);
    }

    @Override
    public List<Company> getAllCompanies() {
        return repository.findAll();
    }

    @Override
    public Company updateCompany(int id, Company company) {
        company.setCompanyId(id);
        return repository.save(company);
    }

    @Override
    public void deleteCompanyById(int id) {
        repository.deleteById(id);
    }
    public Company getCompanyByRoleId(int roleId) {
        return repository.findByRoleId(roleId);
    }
}
