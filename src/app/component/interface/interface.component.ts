import { Component } from '@angular/core';
import { RoleService } from '../../role.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import emailjs from '@emailjs/browser';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.css',
})
export class InterfaceComponent {
  myForm: FormGroup;
  public jobDataRole: any = null;
  private studentData: any = null;
  private appointmentData: any = null;

  constructor(
    private fb: FormBuilder,
    private authData: RoleService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.myForm = this.fb.group({
      fname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phno: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      passingYear: ['', Validators.required],
      percentage: ['', Validators.required],
      language: [''],
      skills: ['', Validators.required],
      projects: [''],
      resumeFile: [null, Validators.required],
    });
  }

  // Getters for form controls
  get Fullname() {
    return this.myForm.get('fname');
  }
  get Email() {
    return this.myForm.get('email');
  }
  get Phno() {
    return this.myForm.get('phno');
  }
  get PassingYear() {
    return this.myForm.get('passingYear');
  }
  get Per() {
    return this.myForm.get('percentage');
  }
  get Language() {
    return this.myForm.get('language');
  }
  get Skills() {
    return this.myForm.get('skills');
  }
  get Projects() {
    return this.myForm.get('projects');
  }
  get Resume() {
    return this.myForm.get('resumeFile');
  }

  submitForm() {
    const jobId = this.route.snapshot.params['id'];
    const jobRequest = this.http.get<any>(`http://localhost:8080/job/${jobId}`);
    const userData = this.authData.getUserData();
    const studentId = localStorage.getItem(userData['role']['roleId']);
    const studentRequest = this.http.get<any>(
      `http://localhost:8080/students/${studentId}`
    );

    forkJoin([jobRequest, studentRequest]).subscribe(
      ([jobResponse, studentResponse]) => {
        console.log(jobResponse);
        console.log(studentResponse);

        this.jobDataRole = jobResponse.role;
        this.studentData = studentResponse;

        if (this.myForm.valid) {
          const formValue = this.myForm.value;
          const appointmentData = {
            studentName: formValue.fname,
            email: formValue.email,
            language: formValue.language,
            phoneNo: formValue.phno,
            yop: formValue.passingYear,
            percentage: formValue.percentage,
            projects: formValue.projects,
            resumeFile: formValue.resumeFile,
            role: this.jobDataRole,
            student: this.studentData,
          };
          console.log(appointmentData);

          this.http
            .post<any>('http://localhost:8080/addAppointment', appointmentData)
            .subscribe(
              (response) => {
                console.log(response);
                this.appointmentData=response
                const email = userData['email'];
                this.sendEmail(email, jobResponse,this.appointmentData); // Pass jobResponse here
                alert("Successfully applied for the job")
                console.log(email);
              },
              (error) => {
                console.log(error);
              }
            );
        } else {
          console.log('no');
        }
      },
      (error) => {
        console.log(error);
      }
    );
    emailjs.init('dyuvbtv5Atr5Olu1O');
  }

async sendEmail(to_email: string, jobResponse: any,appointmentData:any) { 
      try {
        await emailjs.send('service_hqmp8ll', 'template_5e037xa', {
          position: jobResponse['jobName'],
          company: jobResponse['company'],
          to_email: to_email,
        });

        await emailjs.send('service_hqmp8ll', 'template_6ypquze', {
          company: jobResponse['company'],
          jobId: jobResponse['jobId'],
          jobName: jobResponse['jobName'],
          jobTypeControl: jobResponse['jobTypeControl'],
          description: jobResponse['description'],
          salary: jobResponse['salary'],
          vacancy: jobResponse['vacancy'],
          studentname: appointmentData['studentName'],
          email: to_email,
          phoneNo: appointmentData['phoneNo'],
          yop: appointmentData['yop'],
          percentage: appointmentData['percentage'],
          projects: appointmentData['projects'],
          to_email: to_email,
        });

        alert('Thank you for registering to the job');
      } catch (error) {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again later.');
      }
    
    }
  }

