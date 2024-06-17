package com.infosys.repositories;

import java.util.List;

// import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.infosys.entities.Job;
// import com.infosys.entities.Role;

public interface JobRepository extends JpaRepository<Job,Integer>{

    @Query("SELECT j FROM Job j WHERE j.roles.roleId = :roleId")
    List<Job> findJobsByRoleId(@Param("roleId") int roleId);
	
}
