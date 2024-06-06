import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../../role.service';

import { RecruitmentService } from '../../service/recruitment.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;
  roleIdString: number = 0;
  fetchedRoleData: any;

  get studentId() {
    return this.studentForm.get('studentId');
  }
  get name() {
    return this.studentForm.get('name');
  }
  get email() {
    return this.studentForm.get('email');
  }
  get mobile() {
    return this.studentForm.get('mobile');
  }
  get address() {
    return this.studentForm.get('address');
  }
  get college() {
    return this.studentForm.get('college');
  }
  get userName() {
    return this.studentForm.get('userName');
  }
  get collegeId() {
    return this.studentForm.get('collegeId');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private service: RecruitmentService,
    private authData: RoleService
  ) {}
  ngOnInit() {
    this.studentForm = this.fb.group({
      studentId: ['', [Validators.required, Validators.minLength(3)]],
      college: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', [Validators.required, Validators.pattern]],
      address: ['', [Validators.required, Validators.minLength(4)]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
          Validators.minLength(3),
        ],
      ],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      collegeId: ['', [Validators.required, Validators.minLength(4)]],
    });
    //this.getRoleInfo();
  }
  getRoleInfo(): void {
    this.roleIdString = this.route.snapshot.queryParams['roleid'];
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
    // Retrieving form values individually
    const studentName = this.studentForm.get('name').value;
    const studentEmail = this.studentForm.get('email').value;
    const studentAddress = this.studentForm.get('address').value;
    const studentPassword = this.studentForm.get('password').value;
    const studentUsername = this.studentForm.get('userName').value;
    const studentCollege = this.studentForm.get('college').value;
    this.route.params.subscribe((params) => {
      const collegeId1 = params['collegeId'];
      console.log(collegeId1);

      const studentData = {
        studentName: studentName,
        studentEmail: studentEmail,
        studentAddress: studentAddress,

        studentUsername: studentUsername,
        studentCollege: studentCollege,
        role:  userData['role'],
      };
      console.log(studentData);
      this.http
        .post<any>('http://localhost:8080/addStudent', studentData)
        .subscribe(
          (response) => {
            console.log(response);
            const studentId = response.studentId;
            console.log(studentId);
            localStorage.setItem(userData['role']['roleId'], studentId);
            return response;
          },
          (error) => {
            console.log(error);
          }
        );
      this.roleIdString = this.route.snapshot.queryParams['roleid'];
      console.log(this.roleIdString);
      this.router.navigate(['college'], {
        queryParams: { roleid: this.roleIdString },
        replaceUrl: true,
      });
    });
    if (this.studentForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully!');
      this.router.navigate(['/college'], { replaceUrl: true });
    } else {
      // Mark all fields as touched to display validation messages
      this.markAllAsTouched();
    }
  }

  private markAllAsTouched(): void {
    Object.values(this.studentForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}

