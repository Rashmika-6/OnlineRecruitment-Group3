import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindshboard',
  templateUrl: './admindshboard.component.html',
  styleUrl: './admindshboard.component.css',
})
export class AdmindshboardComponent implements OnInit {
  activeTab: string = 'graduates';

  graduates = [];
  employees = [];
  jobs = [];

  ngOnInit(): void {
    this.fetchGraduates();
    this.fetchEmployees();
    this.fetchJobs();
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  fetchGraduates(): void {
    // Replace with your actual data fetching logic
    this.graduates = [
      { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
      { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
      { id: '3', name: 'Michael Brown', email: 'michael.brown@example.com' },
    ];
  }

  fetchEmployees(): void {
    // Replace with your actual data fetching logic
    this.employees = [
      { id: '1', name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      { id: '2', name: 'Bob Davis', email: 'bob.davis@example.com' },
      { id: '3', name: 'Charlie Wilson', email: 'charlie.wilson@example.com' },
    ];
  }

  fetchJobs(): void {
    // Replace with your actual data fetching logic
    this.jobs = [
      { id: '1', title: 'Software Engineer', company: 'Tech Corp' },
      { id: '2', title: 'Data Analyst', company: 'Data Inc' },
      { id: '3', title: 'Product Manager', company: 'Products LLC' },
    ];
  }
}
