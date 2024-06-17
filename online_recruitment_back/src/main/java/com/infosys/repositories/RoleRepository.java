package com.infosys.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.infosys.entities.Role;
import com.infosys.entities.employerDTO;
import com.infosys.entities.graduateDTO;

public interface RoleRepository extends JpaRepository<Role,Integer>{
	 @Query("SELECT new com.infosys.entities.employerDTO(u.userName,u.userId, u.email, r.roleId, c.companyName) " +
	           "FROM Role r " +
	           "JOIN r.user u " +
	           "JOIN r.company c " +
	           "WHERE r.roleId = :roleId")
	    employerDTO findEmployerDTOByRoleId(@Param("roleId") int roleId);

	    @Query("SELECT new com.infosys.entities.employerDTO(u.userName,u.userId, u.email, r.roleId, c.companyName) " +
	           "FROM Role r " +
	           "JOIN r.user u " +
	           "JOIN r.company c")
	    List<employerDTO> findAllEmployerDTOs();
	    
	    
	    @Query("SELECT new com.infosys.entities.graduateDTO(u.userId, r.roleId, s.studentId, s.studentName, s.studentCollege, s.studentEmail) " +
	    	       "FROM Role r " +
	    	       "JOIN r.user u " +
	    	       "JOIN r.student s")
	    	List<graduateDTO> findAllGraduateDTOs();

	    	@Query("SELECT new com.infosys.entities.graduateDTO(u.userId, r.roleId, s.studentId, s.studentName, s.studentCollege, s.studentEmail) " +
	    	       "FROM Role r " +
	    	       "JOIN r.user u " +
	    	       "JOIN r.student s " +
	    	       "WHERE r.roleId = :roleId")
	    	graduateDTO findGraduateDTOByRoleId(@Param("roleId") int roleId);

}
