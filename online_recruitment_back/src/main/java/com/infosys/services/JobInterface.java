package com.infosys.services;

import java.util.List;

import com.infosys.entities.Job;
// import com.infosys.entities.User;

public interface JobInterface {
	public Job addJob(Job job);
	 
	    public Job getJobById(int id);
	   public List<Job> getAllJobs();
	   public  Job updateJob(int id, Job job);
	    public void deleteJobById(int id);
	   
	    public List<Job> getJobsByRoleId(int roleId);
}
