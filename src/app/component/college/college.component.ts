import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrl: './college.component.css',
})
export class CollegeComponent implements OnInit {
  collegeForm: FormGroup;
  collegeId1: string;

  get collegeId() {
    return this.collegeForm.get('collegeId');
  }
  get collegeName() {
    return this.collegeForm.get('collegeName');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.collegeForm = this.fb.group({
      collegeId: ['', [Validators.required, Validators.minLength(3)]],
      collegeName: ['', [Validators.required, Validators.minLength(5)]],
      collegeDesc: ['', [Validators.required]],
      collegeAdd: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const collegeId = this.collegeForm.get('collegeId').value;
   
    const collegeData = {
      name: this.collegeForm.get('collegeName').value,
      description: this.collegeForm.get('collegeDesc').value,
      address: this.collegeForm.get('collegeAdd').value,

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
          this.router.navigate(['/student', { collegeId: this.collegeId1 }]);
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


