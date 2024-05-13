import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  studentForm: FormGroup;

  get studentId(){
    return this.studentForm.get('studentId');
  }
  get name(){
    return this.studentForm.get('name');
  }
  get email(){
    return this.studentForm.get('email');
  }
  get mobile(){
    return this.studentForm.get('mobile');
  }
  get address(){
    return this.studentForm.get('address');
  }
  get password(){
    return this.studentForm.get('password');
  }
  get userName(){
    return this.studentForm.get('userName');
  }
  get collegeId(){
    return this.studentForm.get('collegeId');
  }


  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.studentForm = this.fb.group({
      studentId:['',[Validators.required, Validators.minLength(3)]],
      name: ['',[Validators.required, Validators.minLength(4)]],
      email: ['',[Validators.required, Validators.minLength(8)]],
      mobile: ['',[Validators.required, Validators.pattern]],
      address: ['',[Validators.required, Validators.minLength(4)]],
      password: ['',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/), Validators.minLength(8)]],
      userName: ['',[Validators.required, Validators.minLength(4)]],
      collegeId: ['',[Validators.required, Validators.minLength(4)]],
     
    });
  }
  onSubmit(): void {
    if (this.studentForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully!');
    } else {
      // Mark all fields as touched to display validation messages
      this.markAllAsTouched();
    }
  }

  private markAllAsTouched(): void {
    Object.values(this.studentForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

}

