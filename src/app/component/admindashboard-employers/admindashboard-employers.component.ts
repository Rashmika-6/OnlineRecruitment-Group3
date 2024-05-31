import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admindashboard-employers',
  templateUrl: './admindashboard-employers.component.html',
  styleUrl: './admindashboard-employers.component.css',
})
export class AdmindashboardEmployersComponent implements OnInit {
  employers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEmployers();
  }
  fetchEmployers() {
    this.http.get<any[]>('http://localhost:8080/api/role/employers').subscribe(
      (data) => {
        this.employers = data;
      },
      (error) => {
        console.error('Error fetching employers:', error);
      }
    );
  }
  deleteEmployer(userId: number) {
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
