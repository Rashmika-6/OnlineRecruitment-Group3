package com.infosys.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.entities.Job;
// import com.infosys.entities.User;
import com.infosys.repositories.JobRepository;
// import com.infosys.repositories.RoleRepository;

@Service
public class JobService implements JobInterface {
	@Autowired
	JobRepository repository;
	@Override
	public Job addJob(Job job) {
		
		return repository.save(job);
	}
	 

	    @Override
	    public Job getJobById(int id) {
	        Optional<Job> jobOptional = repository.findById(id);
	        return jobOptional.orElse(null);
	    }

	    @Override
	    public List<Job> getAllJobs() {
	        return repository.findAll();
	    }
	    @Override
	    public Job updateJob(int id, Job job) {
	       
	        return repository.save(job);
	    }

	    @Override
	    public void deleteJobById(int id) {
	        repository.deleteById(id);
	    }
	    @Override
	    public List<Job> getJobsByRoleId(int roleId) {
	    return repository.findJobsByRoleId(roleId);
	    }
	   
}
