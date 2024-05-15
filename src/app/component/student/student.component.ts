import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;
  

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
  get password() {
    return this.studentForm.get('password');
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
    private route :ActivatedRoute
  ) {}
  ngOnInit() {
    this.studentForm = this.fb.group({
      studentId: ['', [Validators.required, Validators.minLength(3)]],
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
  }
  onSubmit(): void {
    // Retrieving form values individually
    const studentName = this.studentForm.get('name').value;
    const studentEmail = this.studentForm.get('email').value;
    const studentAddress = this.studentForm.get('address').value;
    const studentPassword = this.studentForm.get('password').value;
    const studentUsername = this.studentForm.get('userName').value;
    const studentCollege = this.studentForm.get('collegeId').value;
this.route.params.subscribe((params) => {
  const collegeId1 = params['collegeId'];
  console.log(collegeId1)

  const studentData = {
    studentName: studentName,
    studentEmail: studentEmail,
    studentAddress: studentAddress,
    studentPassword: studentPassword,
    studentUsername: studentUsername,
    studentCollege: collegeId1,
  };
  console.log(studentData);
  this.http
    .post<any>('http://localhost:8080/addStudent', studentData)
    .subscribe(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        console.log(error);
      }
  );
  this.router.navigate(['/job4u']);
});
    if (this.studentForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully!');
      this.router.navigate(['/job4u']);
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

