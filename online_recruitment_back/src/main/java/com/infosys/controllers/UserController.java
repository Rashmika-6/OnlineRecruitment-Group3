package com.infosys.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.entities.User;
import com.infosys.services.UserService;
@CrossOrigin("http://localhost:4200")
@RestController
//@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	UserService service;
	
	
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers(){
		return service.getAllUsers();
	}
	
	@GetMapping("getUserByRoleId/{roleId}")
    public User getUserByRoleId(@PathVariable("roleId") int roleId) {
        return service.getUserByRoleId(roleId);
    }
	@PostMapping("/addUser")
	public User addUser(@RequestBody User user) {
		return service.addUser(user);
	}
	
	 
	 @GetMapping("getUser/{id}")
	    public User getUserInfoById(@PathVariable("id") int id) {//
	        return service.getUserInfoById(id);
	    }
	
	
	@PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User user) {
        return service.updateUser(id, user);
    }
	@DeleteMapping("deleteUser/{id}")
    public User deleteUser(@PathVariable("id") int id) {
        return service.deleteUser(id);
    }
	 

	 @PostMapping("/checkUser")
	    public ResponseEntity<?> checkUserExistence(@RequestBody Map<String, String> request) {
	        String userEmail = request.get("email");

	        boolean userExists = service.existsByEmail(userEmail);

	        Map<String, Boolean> response = new HashMap<>();
	        response.put("exists", userExists);

	        return ResponseEntity.ok(response);
	 }
	

}
