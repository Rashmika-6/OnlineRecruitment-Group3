

import { Validators } from '@angular/forms';

export class Job {
  jobName: string;
  salary: string;
  jobDescription: string;
  vacancy: string;
  jobTypeControl: string;
  company: string;

  static formValidationRules = {
    jobName: ['', [Validators.required, Validators.minLength(5)]],
    salary: ['', [Validators.required, Validators.minLength(4)]],
    jobDescription: ['', [Validators.required, Validators.minLength(8)]],
    vacancy: ['', [Validators.required, Validators.minLength(4)]],
    jobTypeControl: ['', [Validators.required]],
    company: ['', [Validators.required]]
  };

  constructor(data?: any) {
    if (data) {
      this.jobName = data.jobName || '';
      this.salary = data.salary || '';
      this.jobDescription = data.jobDescription || '';
      this.vacancy = data.vacancy || '';
      this.jobTypeControl = data.jobTypeControl || '';
      this.company = data.company || '';
    } else {
      this.jobName = '';
      this.salary = '';
      this.jobDescription = '';
      this.vacancy = '';
      this.jobTypeControl = '';
      this.company = '';
    }
  }
}
