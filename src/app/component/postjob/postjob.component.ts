import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrl: './postjob.component.css',
})
export class PostjobComponent implements OnInit {
  jobForm: FormGroup;
  jobTypeControl: FormControl = new FormControl();
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

  constructor(private fb: FormBuilder, private http: HttpClient) {}
  ngOnInit() {
    this.jobForm = this.fb.group({
      jobName: ['', [Validators.required, Validators.minLength(5)]],
      salary: ['', [Validators.required, Validators.minLength(4)]],
      jobDescription: ['', [Validators.required, Validators.minLength(8)]],
      company: ['', [Validators.required]],
      vacancy: ['', [Validators.required]],
      jobTypeControl: ['', [Validators.required]],
    });
  }
  onSubmit(): void {
    console.log('hello');

    console.log('hello');
    const jobdata = {
      company: this.jobForm.get('company').value,
      jobName: this.jobForm.get('jobName').value,
      jobTypeControl: this.jobForm.get('jobTypeControl').value,
      description: this.jobForm.get('jobDescription').value,
      salary: this.jobForm.get('salary').value,
      vacancy: this.jobForm.get('vacancy').value,
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
    console.log('Form submitted successfully!');
  }

  private markAllAsTouched(): void {
    Object.values(this.jobForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
