package com.revature.ers.dao;

import java.util.ArrayList;

import com.revature.ers.pojos.Reimbursement;
import com.revature.ers.pojos.User;

public interface UserDAO {
	public User getUserById(int id);

	public ArrayList<User> getUserByName(String name);
	
	// get user type
	public User getUserRoleById(int id);

	public User addUser(User newUser);

	public ArrayList<Reimbursement> getUserReimbursements(User selectedUser);
	
	//get all reimbursements for all employees
}
