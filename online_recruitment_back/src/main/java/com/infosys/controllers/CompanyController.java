package com.infosys.controllers;

import com.infosys.entities.Company;
import com.infosys.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
// import java.util.Optional;
@CrossOrigin("http://localhost:4200")
@RestController
public class CompanyController {

    @Autowired
    CompanyService service;

    @PostMapping("/addCompany")
    public Company addCompany(@RequestBody Company company) {
        return service.addCompany(company);
    }

    @GetMapping("/companies/{id}")
    public Company getCompanyById(@PathVariable int id) {
        return service.getCompanyById(id);
    }

    @GetMapping("/companies")
    public List<Company> getAllCompanies() {
        return service.getAllCompanies();
    }

    @PutMapping("/companies/{id}")
    public Company updateCompany(@PathVariable int id, @RequestBody Company company) {
        return service.updateCompany(id, company);
    }
    @GetMapping("/companies/by-role/{roleId}")
    public Company getCompanyByRoleId(@PathVariable("roleId") int roleId) {
        return service.getCompanyByRoleId(roleId);
    }

    @DeleteMapping("/companies/{id}")
    public void deleteCompanyById(@PathVariable int id) {
        service.deleteCompanyById(id);
    }
}
