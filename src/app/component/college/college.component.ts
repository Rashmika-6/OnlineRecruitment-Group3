import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../../role.service';
import { RecruitmentService } from '../../service/recruitment.service';
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrl: './college.component.css',
})
export class CollegeComponent implements OnInit {
  collegeForm: FormGroup;
  collegeId1: string;
  roleIdString: number = 0;
  fetchedRoleData: any;

  get collegeId() {
    return this.collegeForm.get('collegeId');
  }
  get collegeName() {
    return this.collegeForm.get('collegeName');
  }

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private http: HttpClient,
    private router: ActivatedRoute,
    private service: RecruitmentService,
    private authData: RoleService
  ) {}
  ngOnInit() {
    this.collegeForm = this.fb.group({
      collegeId: ['', [Validators.required, Validators.minLength(3)]],
      collegeName: ['', [Validators.required, Validators.minLength(5)]],
      collegeDesc: ['', [Validators.required]],
      collegeAdd: ['', [Validators.required]],
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
  
    const collegeId = this.collegeForm.get('collegeId').value;

    const collegeData = {
      name: this.collegeForm.get('collegeName').value,
      description: this.collegeForm.get('collegeDesc').value,
      address: this.collegeForm.get('collegeAdd').value,
      role: userData['role'],

      //role:this.roleData,
    };
    console.log(collegeData);
    this.http
      .post<any>('http://localhost:8080/addColleges', collegeData)
      .subscribe(
        (response) => {
          console.log(response);
          this.collegeId1 = response.collegeId;
          console.log(this.collegeId1);
          this.route.navigate(['/job4u', { collegeId: this.collegeId1 }], {
            replaceUrl: true, // This will replace the current URL in the history
          });
        },
        (error) => {
          console.log(error);
        }
      );
    console.log('Form submitted successfully!');
    console.log(this.collegeId1);

    if (this.collegeForm.valid) {
    } else {
      this.markAllAsTouched();
    }
  }

  private markAllAsTouched(): void {
    Object.values(this.collegeForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}


