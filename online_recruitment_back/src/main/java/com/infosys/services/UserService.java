package com.infosys.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.entities.User;
import com.infosys.repositories.UserReository;

@Service// perform service tasks, such as business logic, data manipulation, or integration with external systems
public class UserService implements UserInterface{
	@Autowired
	UserReository repository;
	@Override
	public List<User> getAllUsers() {
		
		return repository.findAll();
	}

	@Override
	public User addUser(User user) {
		
		return repository.save(user);
	}
	@Override
	public boolean existsByEmail(String email) {
        return repository.existsByEmail(email);
    }
	 @Override
	    public User getUserInfoById(int id) {
	        return repository.findById(id).get();
	    }
	 @Override
	 public User getUserByRoleId(int roleId) {
	        return repository.getUserByRoleId(roleId);
	    }
	 
	 @Override
	    public User updateUser(int id, User user) {
	        Optional<User> existingUserOptional = repository.findById(id);
	        if (existingUserOptional.isPresent()) {
	            User existingUser = existingUserOptional.get();
	            
	            return repository.save(existingUser);
	        } else {
	            return null; 
	        }
	    }
	 
	 @Override
	    public User deleteUser(int id) {
	        Optional<User> userOptional = repository.findById(id);
	        if (userOptional.isPresent()) {
	            User user = userOptional.get();
	            repository.delete(user);
	            return user;
	        } else {
	            return null; 
	        }
	    }
}
