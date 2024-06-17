package com.infosys.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.entities.Role;
// import com.infosys.entities.User;
import com.infosys.entities.employerDTO;
import com.infosys.entities.graduateDTO;
import com.infosys.services.RoleService;

@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/role")
@RestController
public class RoleController {
	
	@Autowired
	RoleService service;
	
	@GetMapping
	public List<Role> getAllRoles() {
		return service.getAllRoles();
	}
	
	@PostMapping
	public Role addRole(@RequestBody Role role) {
		return service.addRole(role);
	}
	
	@GetMapping("/{id}")
	public Role getRoleInfoById(@PathVariable("id") int id) {
	    return service.getRoleInfoById(id);
	}

	@PutMapping("/{id}")
	public Role updateRoleInfo(@PathVariable("id") int id, @RequestBody Role role) {
	    return service.updateRoleInfo(id, role);
	}
	    @GetMapping("/employers")
	    public List<employerDTO> getAllEmployers() {
	        return service.getAllEmployerDTOs();
	    }

	    @GetMapping("/employers/{roleId}")
	    public employerDTO getEmployerByRoleId(@PathVariable("roleId") int roleId) {
	        return service.getEmployerDTOByRoleId(roleId);
	    }
	    
		 @GetMapping("/graduates")
		 public List<graduateDTO> getAllGraduates() {
		        return service.getAllGraduateDTOs();
		 }

		    @GetMapping("/graduates/{roleId}")
		    public graduateDTO getGraduateByRoleId(@PathVariable("roleId") int roleId) {
		        return service.getGraduaterDTOByRoleId(roleId);
		    }
	    @DeleteMapping("deleteRole/{id}")
	    public void  deleteRole(@PathVariable("id") int id) {
	        service.deleteRole(id);
	    }
}
