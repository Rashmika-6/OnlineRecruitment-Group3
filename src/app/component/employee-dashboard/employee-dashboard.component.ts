import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../role.service';
import { HttpClient } from '@angular/common/http';
import { Job } from '../../shared/models/job';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  appointmentData: any[] = [];
  jobs: Job[];
  userData: any; // Define userData as a class property

  constructor(
    private authData: RoleService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userData = this.authData.getUserData();
    console.log(this.userData);
    if (this.userData) {
      this.fetchData();
    }
  }

  fetchData() {
    this.http
      .get<any[]>(
        `http://localhost:8080/appointmentByRoleId/${this.userData.role.roleId}`
      )
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
          console.log(this.jobs);
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
  updateJob(job: any) {
    console.log(job);
    this.router.navigate(['/updatejob'], {
      queryParams: { job: JSON.stringify(job) },
      replaceUrl: true,
    });
  }
  downloadResume(appointmentId: number) {
    this.http
      .get(`http://localhost:8080/${appointmentId}/downloadResume`, {
        responseType: 'arraybuffer',
      })
      .subscribe(
        (response) => {
          const blob = new Blob([response], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `resume_${appointmentId}.pdf`;
          a.click();
          window.URL.revokeObjectURL(url);
        },
        (error) => {
          console.error('Error downloading resume:', error);
        }
      );
  }
  accept(appointemnt: any) {
    const appointmentData = {
      appointmentId: appointemnt.appointmentId,

      studentName: appointemnt.studentName,

      email: appointemnt.email,

      language: appointemnt.language,
      phoneNo: appointemnt.phoneNo,
      yop: appointemnt.yop,
      percentage: appointemnt.percentage,
      projects: appointemnt.projects,
      status: 'Accepted',
      role: appointemnt.role,
      student: appointemnt.student,
    };
    console.log(appointmentData);

    this.http
      .put<any>(
        `http://localhost:8080/updateAppointment/${appointemnt.appointmentId}`,
        appointmentData
      )
      .subscribe(
        (response) => {
          console.log(response);
          alert("updated")
        },
        (error) => {
          console.log(error);
        }
      );
  }
  reject(appointemnt: any) {
    const appointmentData = {
      appointmentId: appointemnt.appointmentId,

      studentName: appointemnt.studentName,

      email: appointemnt.email,

      language: appointemnt.language,
      phoneNo: appointemnt.phoneNo,
      yop: appointemnt.yop,
      percentage: appointemnt.percentage,
      projects: appointemnt.projects,
      status: 'Rejected',
      role: appointemnt.role,
      student: appointemnt.student,
    };
    console.log(appointmentData);

    this.http
      .put<any>(
        `http://localhost:8080/updateAppointment/${appointemnt.appointmentId}`,
        appointmentData
      )
      .subscribe(
        (response) => {
          console.log(response);
          alert('updated');
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
