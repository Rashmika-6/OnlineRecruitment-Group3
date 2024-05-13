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

  constructor(private http: HttpClient, private _route: Router, private fb: FormBuilder) {}

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
  
    this.http.get<any>("http://localhost:3000/register")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
    });
  
      if(user){
        alert('Data Entered Successful');
        this.company.reset();
        this._route.navigate(['home']);
      }else{
        alert('Wrong Data');
        this._route.navigate(['company']);
      }
  
    },err=>{
      alert('Something went wrong');
    })
  }
}
