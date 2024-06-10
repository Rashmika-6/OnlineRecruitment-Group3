import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RecruitmentService } from '../../service/recruitment.service';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrl: './postjob.component.css',
})
export class PostjobComponent implements OnInit {
  jobForm: FormGroup;
  jobTypeControl: FormControl = new FormControl();
  roleIdString: number = 0;
  fetchedRoleData: any;
  jobTypes: string[] = ['Full Time', 'Part Time', 'Internship'];

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
    private authData:RoleService,private route:Router
  ) {}
  ngOnInit() {
    this.jobForm = this.fb.group({
      jobName: ['', [Validators.required, Validators.minLength(5)]],
      salary: ['', [Validators.required, Validators.minLength(4)]],
      jobDescription: ['', [Validators.required, Validators.minLength(8)]],
      company: ['', [Validators.required]],
      vacancy: ['', [Validators.required]],
      location: ['', [Validators.required]],
      jobTypeControl: ['', [Validators.required]],
    });
    //this.getRoleInfo();
  }
  getRoleInfo(): void {
    this.roleIdString = this.router.snapshot.queryParams['roleid'];
    console.log(this.roleIdString);

    this.service.getRoleInfoById(this.roleIdString).subscribe({
      next: (data: any) => {
        this.fetchedRoleData = data;
        console.log(this.fetchedRoleData);
      },
      error: (error) => {
        console.error('Error fetching role:', error);
      },
    });
  }
  onSubmit(): void {
    
    const userData = this.authData.getUserData();
    console.log(userData);
    const jobdata = {
      company: this.jobForm.get('company').value,
      jobName: this.jobForm.get('jobName').value,
      jobTypeControl: this.jobForm.get('jobTypeControl').value,
      description: this.jobForm.get('jobDescription').value,
      location:this.jobForm.get('location').value,
      salary: this.jobForm.get('salary').value,
      vacancy: this.jobForm.get('vacancy').value,
      roles: userData['role'],
    };
    console.log(jobdata);
    this.http.post<any>('http://localhost:8080/job', jobdata).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    alert("Job posted successfully")
    this.route.navigate(['/employer']);
    console.log('Form submitted successfully!');
  }

  private markAllAsTouched(): void {
    Object.values(this.jobForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
