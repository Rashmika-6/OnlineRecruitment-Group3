import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RecruitmentService } from '../../service/recruitment.service';
import { RoleService } from '../../role.service';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  company: FormGroup | any;
  roleIdString: number = 0;
  fetchedRoleData: any;

  constructor(
    private http: HttpClient,
    private route: Router,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private service: RecruitmentService,
    private authData:RoleService
  ) {}

  ngOnInit(): void {
    this.company = this.fb.group({
      cid: ['', Validators.required],
      cname: ['', Validators.required],
      ctype: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
    });
    //this.getRoleInfo();
  }
  getRoleInfo(): void {
    this.roleIdString = this.router.snapshot.queryParams['roleid'];
    console.log(this.roleIdString);
  
    this.service.getRoleInfoById(this.roleIdString).subscribe({
      next: (data: any) => {
        this.fetchedRoleData = data;
        console.log(this.fetchedRoleData);
      },
      error: (error) => {
        console.error('Error fetching role:', error);
      },
    });
  }
  companydata(): void {
    const userData = this.authData.getUserData();
    console.log(userData);
  
    const companydata = {
      companyName: this.company.get('cname').value,
      companyDescription: this.company.get('description').value,
      companyType: this.company.get('ctype').value,
      companyAddress: this.company.get('address').value,
      role: userData['role'],
    };
    console.log(companydata)
    this.http
      .post<any>('http://localhost:8080/addCompany', companydata)
      .subscribe(
        (response) => {
          console.log(response);
          return response;
        },
        (error) => {
          console.log(error);
        }
    );
    this.roleIdString = this.router.snapshot.queryParams['roleid'];
    console.log(this.roleIdString);
    this.route.navigate(['/employer'], {
      queryParams: { roleid: this.roleIdString },
      replaceUrl: true,
    });
  }

}
  
