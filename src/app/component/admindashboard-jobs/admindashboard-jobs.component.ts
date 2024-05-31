import { Component, OnInit } from '@angular/core';
import { RecruitmentService } from '../../service/recruitment.service';
import { Router } from '@angular/router';
import { Job } from '../../shared/models/job';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admindashboard-jobs',
  templateUrl: './admindashboard-jobs.component.html',
  styleUrl: './admindashboard-jobs.component.css',
})
export class AdmindashboardJobsComponent implements OnInit {
  jobs: Job[];
  constructor(private service: RecruitmentService, private router: Router, private http:HttpClient) {}
  ngOnInit(): void {
    this.service.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }
  deleteJob(jobId: number) {
    console.log(jobId);
    this.http.delete(`http://localhost:8080/job/${jobId}`).subscribe(
      () => {
        alert('Job deleted successfully');
      },
      (error) => {
        console.error('Error deleting role:', error);
      }
    );
    this.service.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }
}
