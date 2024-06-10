import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RecruitmentService } from '../../service/recruitment.service';
import { RoleService } from '../../role.service';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  roleIdNumber: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: RecruitmentService,
    private http: HttpClient,
    private authService: RoleService
  ) {
    this.myform = this.fb.group({
      
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
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
    const userEmailInput = this.myform.get('email').value;
    const userPasswordInput = this.myform.get('password').value;
    const userRoleIdInput = this.myform.get('role_id').value;
    if (
      userEmailInput == 'admin@gmail.com' &&
      userRoleIdInput == '123' &&
      userPasswordInput == 'Admin@123'
    ) {
      localStorage.setItem("Admin", "1");
      this.authService.login();
      this.router.navigate(['adminEmployer'], { replaceUrl: true });
    }
    else {
      // this.http
      //   .post<any>('http://localhost:8080/checkUser', { email: userEmailInput })
      //   .subscribe(
      //     (response) => {
      //       console.log(response);
            if (this.myform.valid) {
              const numericPart = userRoleIdInput.replace(/\D/g, '');
              //console.log('Extracted numeric part:', numericPart);  Log the extracted numeric part

              // Convert the numeric part to a number
              this.roleIdNumber = numericPart ? parseInt(numericPart, 10) : null;
              console.log(this.roleIdNumber)
             this.http
               .get<any>(
                 `http://localhost:8080/getUserByRoleId/${this.roleIdNumber}`
               )
               .subscribe(
                 (response) => {
                   console.log(response);
                   if (this.myform.get('password').value === response.password) {
                     this.authService.saveUserData(response);
                        if (userRoleIdInput.startsWith('emp')) {
                     console.log('one');
                     this.authService.login();
                     this.router.navigate(['/employer'], {
                       queryParams: { roleid: this.roleIdString },
                       replaceUrl: true,
                     });
                   } else {
                     console.log('four');
                     this.authService.login();
                     this.router.navigate(['/graduate', { replaceUrl: true }]);
                   }
                   }
                   else {
                     console.log("wait")
                   }
                   

                   
                
                 },
                 (error) => {
                   console.log(error);
                 }
               );
            } else {
             alert("Invalid form")
            }
       
    }
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
