package com.infosys.services;

import java.util.List;

import com.infosys.entities.User;

public interface UserInterface {
public List<User> getAllUsers();
public User addUser(User user);
public User getUserInfoById(int id);
public User updateUser(int id,User user);
public User deleteUser(int id);
public boolean existsByEmail(String email);
public User getUserByRoleId(int roleId);
}
