package com.infosys.services;

import java.util.List;

import com.infosys.entities.Role;
import com.infosys.entities.graduateDTO;

public interface RoleInterface {
	
	public List<Role> getAllRoles();
	public Role addRole(Role role);
	public Role getRoleInfoById(int id);
	public Role updateRoleInfo(int id,Role role);
	 public List<graduateDTO> getAllGraduateDTOs();
	  public void deleteRole(int id);
}
