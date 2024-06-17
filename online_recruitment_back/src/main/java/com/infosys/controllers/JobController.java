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
import org.springframework.web.bind.annotation.RestController;

import com.infosys.entities.Job;
import com.infosys.services.JobService;
// import com.infosys.services.RoleService;
@CrossOrigin("http://localhost:4200")
@RestController
public class JobController {
	
	@Autowired
	JobService service;
	@PostMapping("/job")
	public Job addJob(@RequestBody Job job) {
		return service.addJob(job);
	}
	 

	    @GetMapping("/job/{id}")
	    public Job getJobById(@PathVariable("id") int id) {
	        return service.getJobById(id);
	    }

	    @GetMapping("/getAllJobs")
	    public List<Job> getAllJobs() {
	        return service.getAllJobs();
	    }
	    @PutMapping("/updateJob/{id}")
	    public Job updateJob(@PathVariable("id") int id, @RequestBody Job job) {
	        return service.updateJob(id, job);
	    }

	    @DeleteMapping("/job/{id}")
	    public void deleteJobById(@PathVariable("id") int id) {
	        service.deleteJobById(id);
	    }
	    @GetMapping("/byRole/{roleId}")
	    public List<Job> getJobsByRoleId(@PathVariable("roleId") int roleId) {
	        return service.getJobsByRoleId(roleId);
	    }
}
