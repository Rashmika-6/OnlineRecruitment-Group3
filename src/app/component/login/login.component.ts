import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RecruitmentService } from '../../service/recruitment.service';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  formTitle: string = 'Login';
  myform: FormGroup;
  roleIdString: number = 0;
  fetchedRoleData: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: RecruitmentService,
    private http:HttpClient
  ) {
    this.myform = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', Validators.required],
      password: ['', Validators.required],
      mobileNum: [
        '',
        [
          Validators.required,
          Validators.pattern('[789][0-9]{9}'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  

  getRoleInfo(): void {
    this.roleIdString = this.route.snapshot.queryParams['roleId'];
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

  submit() {
    
    const userEmail1 = localStorage.getItem('userEmail');
    const userPassword1 = localStorage.getItem('userPassword');

    //const roleId1 = this.route.snapshot.queryParams['roleid'];

    this.roleIdString = this.route.snapshot.queryParams['id'];
    // const roleId = parseInt(roleIdString, 10);
    console.log(typeof this.roleIdString);
    const storedRoleId = localStorage.getItem(userEmail1);

    //  const grd = localStorage.getItem('graduateCounter');
    // console.log(grd)

    const userEmailInput = this.myform.get('email').value;
    const userPasswordInput = this.myform.get('password').value;
    const userRoleIdInput = this.myform.get('role_id').value;
    const mobileNum = this.myform.get('mobileNum').value;
    const userName = this.myform.get('userName').value;

    if (
      userEmail1 === userEmailInput &&
      userPassword1 === userPasswordInput &&
      storedRoleId === userRoleIdInput
    ) {
      const userData = {
        userName: userName,
        password: userPasswordInput,
        mobileNum: mobileNum,
        email: userEmailInput,
        role: this.fetchedRoleData,

        //role:this.roleData,
      };
      console.log(userData);
     this.http.post<any>('http://localhost:8080/addUser', userData).subscribe(
       (response) => {
         console.log(response);
         return response;
       },
       (error) => {
         console.log(error);
       }
     );
      this.router.navigate(['/content']);
    } else {
      alert('Login failed');
    }

    this.myform.reset();
  }
  ngOnInit(): void {
    
    this.getRoleInfo();
 
  }
  get Email(): FormControl {
    return this.myform.get('email') as FormControl;
  }

  get Pass(): FormControl {
    return this.myform.get('password') as FormControl;
  }

  get Role(): FormControl {
    return this.myform.get('role_id') as FormControl;
  }
  get Fullname(): FormControl {
    return this.myform.get('userName') as FormControl;
  }
  get Phno(): FormControl {
    return this.myform.get('mobileNum') as FormControl;
  }
  // addUser()
  // {
  //   console.log(this.myform.value)
  // }
}
