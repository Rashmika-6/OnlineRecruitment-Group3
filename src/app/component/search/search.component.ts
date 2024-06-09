import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecruitmentService } from '../../service/recruitment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  jobs: any[]=[];

  filteredJobs: any[] = [];
  searchTerm: string;
  salaryCutoff: number;

  constructor(
    private http: HttpClient,
    private service: RecruitmentService,
    private router: Router
  ) {
    this.filteredJobs = this.jobs;
  }

  ngOnInit(): void {
   
    this.service.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
      console.log(this.jobs);
    });
    this.searchJobs()
  }
  searchJobs() {
    this.filteredJobs = this.jobs.filter((job) => {
      if (this.searchTerm) {
        return (
          job.jobName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          job.salary.toString().includes(this.searchTerm) ||
          job.location.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else if (this.salaryCutoff) {
        return job.salary >= this.salaryCutoff;
      }
      return this.jobs;
    });
  }
  applyJob(jobId: number) {
    console.log(jobId);
    this.router.navigate(['interface', jobId], { replaceUrl: true });
  }
}
