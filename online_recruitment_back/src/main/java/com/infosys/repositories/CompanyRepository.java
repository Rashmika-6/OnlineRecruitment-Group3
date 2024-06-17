package com.infosys.repositories;

// import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.infosys.entities.Company;


public interface CompanyRepository extends JpaRepository<Company, Integer> {
	@Query("SELECT c FROM Company c WHERE c.role.roleId = :roleId")
    Company findByRoleId(@Param("roleId") int roleId);
   
}
