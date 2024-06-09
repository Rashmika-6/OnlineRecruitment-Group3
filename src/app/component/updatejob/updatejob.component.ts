import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RecruitmentService } from '../../service/recruitment.service';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrl: './updatejob.component.css',
})
export class UpdatejobComponent {
  jobForm: FormGroup;
  jobTypeControl: FormControl = new FormControl();
  roleIdString: number = 0;
  fetchedRoleData: any;
  jobTypes: string[] = ['Full Time', 'Part Time', 'Internship'];
  job: any;
  get jobName() {
    return this.jobForm.get('jobName');
  }
  get salary() {
    return this.jobForm.get('salary');
  }
  get jobDescription() {
    return this.jobForm.get('jobDescription');
  }
  get company() {
    return this.jobForm.get('company');
  }
  get jobId() {
    return this.jobForm.get('jobId');
  }
  get vacancy() {
    return this.jobForm.get('vacancy');
  }
  get location() {
    return this.jobForm.get('location');
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: ActivatedRoute,
    private service: RecruitmentService,
    private authData: RoleService,
    private route: Router
  ) {}
  ngOnInit() {
    this.jobForm = this.fb.group({
      jobName: ['', [Validators.required, Validators.minLength(5)]],
      salary: ['', [Validators.required, Validators.minLength(4)]],
      jobDescription: ['', [Validators.required, Validators.minLength(8)]],
      company: ['', [Validators.required]],
      jobId: ['', [Validators.required]],
      vacancy: ['', [Validators.required]],
      location: ['', [Validators.required]],
      jobTypeControl: ['', [Validators.required]],
    });
    //this.getRoleInfo();

    this.router.queryParams.subscribe((params) => {
      const jobString = params['job'];
      if (jobString) {
        try {
          this.job = JSON.parse(jobString);
          console.log(this.job);
          if (this.job) {
            this.jobForm.patchValue({
              jobId: this.job.jobId,
              company: this.job.company,
              jobName: this.job.jobName,
              salary: this.job.salary,
              location: this.job.location,
              jobTypeControl: this.job.jobTypeControl,
              jobDescription: this.job.description,
              vacancy: this.job.vacancy,
            });
          } else {
            console.error('Job object is undefined');
          }
        } catch (error) {
          console.error('Error parsing job string:', error);
        }
      } else {
        console.error('Job string is undefined');
      }
    });
  }

  onSubmit(): void {
    const userData = this.authData.getUserData();
    console.log(userData);
    const jobdata = {
      jobId: this.job.jobId,
      company: this.jobForm.get('company').value,
      jobName: this.jobForm.get('jobName').value,
      jobTypeControl: this.jobForm.get('jobTypeControl').value,
      description: this.jobForm.get('jobDescription').value,
      location: this.jobForm.get('location').value,
      salary: this.jobForm.get('salary').value,
      vacancy: this.jobForm.get('vacancy').value,
      roles: userData['role'],
    };
    console.log(jobdata);
    this.http
      .put<any>(`http://localhost:8080/updateJob/${this.job.jobId}`, jobdata)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    alert('Job updated successfully');
    console.log('Form submitted successfully!');
    this.route.navigate(['/employer']);
  }

  private markAllAsTouched(): void {
    Object.values(this.jobForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
