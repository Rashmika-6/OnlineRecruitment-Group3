

import { Validators } from '@angular/forms';
import { Role } from './role';

export class Job {
  jobId: number;
  jobName: string;
  salary: string;
  jobDescription: string;
  vacancy: string;
  jobTypeControl: string;
  company: string;
  role: Role;

  static formValidationRules = {
    jobName: ['', [Validators.required, Validators.minLength(5)]],
    salary: ['', [Validators.required, Validators.minLength(4)]],
    jobDescription: ['', [Validators.required, Validators.minLength(8)]],
    vacancy: ['', [Validators.required, Validators.minLength(4)]],
    jobTypeControl: ['', [Validators.required]],
    company: ['', [Validators.required]],
    role: ['', [Validators.required]],
  };

  constructor(data?: any) {
    if (data) {
      this.jobId = data.jobId || '';
      this.jobName = data.jobName || '';
      this.salary = data.salary || '';
      this.jobDescription = data.jobDescription || '';
      this.vacancy = data.vacancy || '';
      this.jobTypeControl = data.jobTypeControl || '';
      this.company = data.company || '';
      this.role = data.role || null;
    } else {
      this.jobId = 0;
      this.jobName = '';
      this.salary = '';
      this.jobDescription = '';
      this.vacancy = '';
      this.jobTypeControl = '';
      this.company = '';
      this.role =null;
    }
  }
}
