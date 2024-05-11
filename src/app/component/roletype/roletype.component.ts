import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RecruitmentService } from '../../service/recruitment.service';

@Component({
  selector: 'app-roletype',
  templateUrl: './roletype.component.html',
  styleUrls: ['./roletype.component.css'],
})
export class RoletypeComponent implements OnInit {
  form: FormGroup;
  generatedOTP: string = '';
  employerCounter: number = 100;
  graduateCounter: number = 200;
  roleid: string = '';
  roleTitle: string = '';
  roleData: any;
  roleDesc: string = '';
  id: number = 0;
  roleId: number ;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: RecruitmentService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
    });

    this.employerCounter =
      parseInt(localStorage.getItem('employerCounter')) || 100;
    this.graduateCounter =
      parseInt(localStorage.getItem('graduateCounter')) || 200;
  }

  ngOnInit(): void {}

  send() {
    const reply_to = this.route.snapshot.queryParams['reply_to'];
    emailjs.init('1rY5oNPpZKkxDy-sQ');

    const roleTitle = this.form.get('role').value;
    if (roleTitle.startsWith('emp')) {
      this.roleDesc = 'Employer';
    } else {
      this.roleDesc = 'Graduate';
    }

    this.roleData = {
      roleTitle: roleTitle,
      roleDesc: this.roleDesc,
    };

    this.service.addRole(this.roleData).subscribe((res) => {
      console.log(res);
      const roleId = res.roleId;
      console.log(roleId);
      if (roleTitle === 'employer') {
        this.roleid = 'emp00' +  roleId ;
      } else if (roleTitle === 'graduate') {
        this.roleid = `grd00${roleId}`;
      }
this.roleId = roleId;
      // Send email inside the subscribe callback
      this.sendEmail(reply_to);
      localStorage.setItem(reply_to, this.roleid);
      console.log(this.roleId)
      
    });
  }

  async sendEmail(reply_to: string) {
    try {
      console.log(this.roleid);
      await emailjs.send(
       'service_1nyzcog', 'template_4o7ao4m',
        {
          reply_to: reply_to,
          message: this.roleid,
        }
      );

      alert('Email sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again later.');
    }
this.router.navigate(['/login'], {
  queryParams: {
    roleId: this.roleId,
    //id: this.id,
  },
});
    
  }

  get Email(): FormControl {
    return this.form.get('email') as FormControl;
  }
}
