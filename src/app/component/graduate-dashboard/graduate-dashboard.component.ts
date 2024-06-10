import { Component,OnInit } from '@angular/core';
import { Job } from '../../shared/models/job';
import { RoleService } from '../../role.service';
import { HttpClient } from '@angular/common/http';

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
        
        return 'btn-green';
      case 'Rejected':
        
        return 'btn-red';
      case 'pending':
        return 'btn-white';
      default:
        return '';
    }
  }
  
}
