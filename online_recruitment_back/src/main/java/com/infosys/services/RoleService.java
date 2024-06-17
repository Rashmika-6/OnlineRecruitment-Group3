package com.infosys.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.entities.Role;
// import com.infosys.entities.User;
import com.infosys.entities.employerDTO;
import com.infosys.entities.graduateDTO;
import com.infosys.repositories.RoleRepository;

import jakarta.transaction.Transactional;
@Service
public class RoleService implements RoleInterface{
	
	@Autowired
	RoleRepository repository;

	@Override
	public List<Role> getAllRoles() {
		
		return repository.findAll();
	}
	@Transactional
	@Override
	public Role addRole(Role role) {
		
		return repository.save(role);
	}
	@Transactional
	 @Override
	    public Role getRoleInfoById(int id) {
	        Optional<Role> roleOptional = repository.findById(id);
	        return roleOptional.orElse(null);
	    }

	    @Override
	    public Role updateRoleInfo(int id, Role role) {
	        Optional<Role> existingRoleOptional =repository.findById(id);
	        if (existingRoleOptional.isPresent()) {
	            Role existingRole = existingRoleOptional.get();
	            
	            existingRole.setRoleTitle(role.getRoleTitle());
	            existingRole.setRoleDesc(role.getRoleDesc());
	            
	            return repository.save(existingRole);
	        } else {
	            return null; 
	        }
	    }
	 
	    
	    public employerDTO getEmployerDTOByRoleId(int roleId) {
	        return repository.findEmployerDTOByRoleId(roleId);
	    }

	    public List<employerDTO> getAllEmployerDTOs() {
	        return repository.findAllEmployerDTOs();
	    }
	   public graduateDTO getGraduaterDTOByRoleId(int roleId) {
	        return repository.findGraduateDTOByRoleId(roleId);
	    }
	   @Override
	    public List<graduateDTO> getAllGraduateDTOs() {
	        return repository.findAllGraduateDTOs();
	    }
	    @Override
	    public void deleteRole(int id) {
	        Optional<Role> roleOptional = repository.findById(id);
	        if (roleOptional.isPresent()) {
	            Role role = roleOptional.get();
	            repository.delete(role);
	            
	        } 
	    }
}
