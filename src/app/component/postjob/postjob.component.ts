import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrl: './postjob.component.css'
})
export class PostjobComponent implements OnInit{
  jobForm: FormGroup;

  
  get jobName(){
    return this.jobForm.get('jobName');
  }
  get salary(){
    return this.jobForm.get('salary');
  }
  get jobDescription(){
    return this.jobForm.get('jobDescription');
  }
  get phoneNumber(){
    return this.jobForm.get('phoneNumber');
  }
  get vacancy(){
    return this.jobForm.get('vacancy');
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.jobForm = this.fb.group({
      jobName:['',[Validators.required, Validators.minLength(5)]],
      salary: ['',[Validators.required, Validators.minLength(4)]],
      jobDescription: ['',[Validators.required, Validators.minLength(8)]],
      phoneNumber: ['',[Validators.required, Validators.pattern]],
      vacancy: ['',[Validators.required, Validators.minLength(4)]],
     
    });
  }
  onSubmit(): void {
    if (this.jobForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully!');
    } else {
      // Mark all fields as touched to display validation messages
      this.markAllAsTouched();
    }
  }

  private markAllAsTouched(): void {
    Object.values(this.jobForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

}
