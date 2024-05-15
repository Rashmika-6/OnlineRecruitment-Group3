import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company: FormGroup|any;

  constructor(private http: HttpClient, private route: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.company = this.fb.group({
      cid: ['', Validators.required],
      cname: ['', Validators.required],
      ctype: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  companydata(): void {
    console.log(this.company.value);
    const companydata = {
      companyName: this.company.get('cname').value,
      companyDescription: this.company.get('description').value,
      companyType: this.company.get('ctype').value,
      companyAddress: this.company.get('address').value,
    }
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
     this.route.navigate(['/postjob']);
      
    }

  
   
  
      
    }
  
