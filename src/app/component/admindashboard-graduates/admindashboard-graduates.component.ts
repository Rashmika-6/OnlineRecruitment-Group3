import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admindashboard-graduates',
  templateUrl: './admindashboard-graduates.component.html',
  styleUrl: './admindashboard-graduates.component.css',
})
export class AdmindashboardGraduatesComponent implements OnInit {
 

  graduates: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEmployers();
  }
  fetchEmployers() {
    this.http.get<any[]>('http://localhost:8080/api/role/graduates').subscribe(
      (data) => {
        this.graduates = data;
      },
      (error) => {
        console.error('Error fetching graduates:', error);
      }
    );
  }
  deleteGraduate(userId: number) {
    console.log(userId)
    this.http.delete(`http://localhost:8080/deleteUser/${userId}`).subscribe(
      () => {
        alert('Role deleted successfully');
      },
      (error) => {
        console.error('Error deleting role:', error);
      }
    );
    this.fetchEmployers();
  }
}
