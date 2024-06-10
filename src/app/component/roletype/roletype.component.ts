import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RoleService } from '../../role.service';
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

  roleid: string = '';
  roleTitle: string = '';
  roleData: any;
  roleDesc: string = '';
  formData: any;
  roleId: number;

  constructor(
    private authService: RoleService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: RecruitmentService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.formData = navigation.extras.state['data'];
      console.log(this.formData);
    } else {
      this.formData = null;
    }
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
    });
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
        this.roleid = 'emp00' + roleId;
      } else if (roleTitle === 'graduate') {
        this.roleid = `grd00${roleId}`;
      }
      this.roleId = roleId;

      // Send email inside the subscribe callback
      this.sendEmail(reply_to);
      localStorage.setItem(reply_to, this.roleid);

      console.log(this.roleId);
      const userData = {
        userName: this.formData.userName,
        password: this.formData.password,
        mobileNum: this.formData.mobileNum,
        email: this.formData.email,
        nationality:this.formData.nationality,
        role: res,
      };
      console.log('hello');
      this.http.post<any>('http://localhost:8080/addUser', userData).subscribe(
        (response) => {
          console.log(response);
          this.authService.saveUserData(response);
          return response;
        },
        (error) => {
          console.log(error);
        }
      );
    });
        if (roleTitle.startsWith('emp')) {
          this.authService.login();
          console.log('two');
          //this.roleIdString = this.route.snapshot.queryParams['roleId'];
          //console.log(this.roleIdString);
          this.router.navigate(['company'], {
            //queryParams: { roleid: this.roleIdString },
            replaceUrl: true,
          });
        } else {
          console.log('three');
          this.authService.login();
          
          this.router.navigate(['student'], {
          
            replaceUrl: true,
          });
        }
  }

  async sendEmail(reply_to: string) {
    try {
      console.log(this.roleid);
      // await emailjs.send(
      //  'service_1nyzcog', 'template_4o7ao4m',
      //   {
      //     to_email: reply_to,
      //     message: this.roleid,
      //   }
      // );

      alert('Account created successfully');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again later.');
    }
    // this.router.navigate(['/login'], {
    //   queryParams: {
    //     roleId: this.roleId,
    //     //id: this.id,
    //   },
    //   replaceUrl: true,
    // });
  }

  get Email(): FormControl {
    return this.form.get('email') as FormControl;
  }
}
