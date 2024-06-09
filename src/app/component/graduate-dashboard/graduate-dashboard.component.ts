import { Component,OnInit } from '@angular/core';
import { Job } from '../../shared/models/job';
import { RoleService } from '../../role.service';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-graduate-dashboard',
  templateUrl: './graduate-dashboard.component.html',
  styleUrl: './graduate-dashboard.component.css',
})
export class GraduateDashboardComponent implements OnInit {
  appointmentData: any[] = [];
  jobs: Job[];
  userData: any;
  // Define userData as a class property

  constructor(private authData: RoleService, private http: HttpClient) {}

  ngOnInit(): void {
    this.userData = this.authData.getUserData();
    console.log(this.userData);
    this.fetchData(); // Call fetchData method correctly
  }

  fetchData() {
    const studentId = localStorage.getItem(this.userData.role.roleId);
    this.http
      .get<any[]>(`http://localhost:8080/appointmentByStudentId/${studentId}`)
      .subscribe(
        (data) => {
          this.appointmentData = data;
          console.log(this.appointmentData);
        },
        (error) => {
          console.error('Error fetching appointments:', error);
        }
      );
    this.http
      .get<any[]>(`http://localhost:8080/byRole/${this.userData.role.roleId}`)
      .subscribe(
        (data) => {
          this.jobs = data;
        },
        (error) => {
          console.error('Error fetching Job data', error);
        }
      );
  }
  deleteJob(jobId: number) {
    console.log(jobId);
    this.http.delete(`http://localhost:8080/job/${jobId}`).subscribe(
      () => {
        console.log('Job deleted successfully');
      },
      (error) => {
        console.error('Error deleting job:', error);
      }
    );
  }
  getStatusClass(appointment: any): string {
    const status = appointment.status;
    switch (status) {
      case 'Accepted':
        this.sendEmailAccepted(appointment);
        return 'btn-green';
      case 'Rejected':
        this.sendEmailRejected(appointment);
        return 'btn-red';
      case 'pending':
        return 'btn-white';
      default:
        return '';
    }
  }
  async sendEmailAccepted(appointment: any) {
    try {
      const message = `

      Congratulations! We are pleased to inform you that your resume has been selected for further consideration.

      We would like to schedule an interview with you to discuss your application in more detail. Your interview is scheduled for 5:00pm on 21-06-2024.
-
-      Please confirm your availability for this time slot at your earliest convenience. We look forward to speaking with you soon.
 
    `;
      let response = await emailjs.send('service_tw42dwi', 'template_ruz1xlc', {
        sender: 'Admin',
        message: message,
        reply_to: appointment.email,
        to_email: ' ',
      });
      alert('OTP sent successfully! Please check your inbox.');
    } catch (error) {
      console.error('Failed to send ', error);
    }
  }
  async sendEmailRejected(appointment: any) {
    try {
      const message = `     

      We regret to inform you that your application has been rejected.

      We appreciate your interest in our company and the time you invested in the application process. Unfortunately, we have decided to pursue other candidates who more closely match our current needs.

      We wish you the best of luck in your job search and future endeavors.

 
    `;
      let response = await emailjs.send('service_tw42dwi', 'template_ruz1xlc', {
        sender: 'Admin',
        message: message,
        reply_to: appointment.email,
        to_email: ' ',
      });
      alert('OTP sent successfully! Please check your inbox.');
    } catch (error) {
      console.error('Failed to send ', error);
    }
  }
}
