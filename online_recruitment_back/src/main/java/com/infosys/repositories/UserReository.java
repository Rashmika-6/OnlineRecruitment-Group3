package com.infosys.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.infosys.entities.User;

public interface UserReository  extends JpaRepository<User,Integer>{
	boolean existsByEmail(String email);

	@Query("SELECT u FROM User u WHERE u.role.roleId = :roleId")
	public User getUserByRoleId(@Param("roleId") int roleId);
	
	User findByRoleRoleId(int roleId);
}
