import { Component } from '@angular/core';
import { Job } from '../../shared/models/job'
import { HttpClient } from '@angular/common/http';
import { RecruitmentService } from '../../service/recruitment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job4u',
  templateUrl: './job4u.component.html',
  styleUrl: './job4u.component.css',
})
export class Job4uComponent {
  jobs: any;

  constructor(
    private http: HttpClient,
    private service: RecruitmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
      console.log(this.jobs)
    });
  }
 
  applyJob(jobId: number) {
    console.log(jobId)
    this.router.navigate(['interface', jobId], { replaceUrl: true });
  }


  
}
