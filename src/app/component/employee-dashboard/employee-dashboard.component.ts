import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../role.service';
import { HttpClient } from '@angular/common/http';
import { Job } from '../../shared/models/job';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  appointmentData: any[] = [];
  jobs: Job[];
  userData: any; // Define userData as a class property

  constructor(private authData: RoleService, private http: HttpClient) {}

  ngOnInit(): void {
    this.userData = this.authData.getUserData();
    console.log(this.userData);
    this.fetchData(); // Call fetchData method correctly
  }

  fetchData() {
    this.http
      .get<any[]>(
        `http://localhost:8080/appointmentByRoleId/${this.userData.role.roleId}`
      )
      .subscribe(
        (data) => {
          this.appointmentData = data;
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
}
