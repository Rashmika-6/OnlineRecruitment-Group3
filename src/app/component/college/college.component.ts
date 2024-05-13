import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrl: './college.component.css'
})
export class CollegeComponent implements OnInit {
  collegeForm: FormGroup;

  
  get collegeId(){
    return this.collegeForm.get('collegeId');
  }
  get collegeName(){
    return this.collegeForm.get('collegeName');
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.collegeForm = this.fb.group({
      collegeId:['',[Validators.required, Validators.minLength(3)]],
      collegeName: ['',[Validators.required, Validators.minLength(5)]],
     
    });
  }

  onSubmit(): void {
    if (this.collegeForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully!');
    } else {
      // Mark all fields as touched to display validation messages
      this.markAllAsTouched();
    }
  }

  private markAllAsTouched(): void {
    Object.values(this.collegeForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}


