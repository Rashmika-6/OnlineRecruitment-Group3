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
    const userEmailInput = this.myform.get('email').value;
    const userPasswordInput = this.myform.get('password').value;
    const userRoleIdInput = this.myform.get('role_id').value;
    if (
      userEmailInput == 'admin@gmail.com' &&
      userRoleIdInput == '123' &&
      userPasswordInput == 'abc'
    ) {
      this.authService.login();
      this.router.navigate(['adminEmployer'], { replaceUrl: true });
    }
    else {
      this.http
        .post<any>('http://localhost:8080/checkUser', { email: userEmailInput })
        .subscribe(
          (response) => {
            console.log(response);
            if (response.exists) {
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
                   this.authService.saveUserData(response);

                   // Statement 2: This will be executed after role data is fetched
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
                 },
                 (error) => {
                   console.log(error);
                 }
               );
            } else {
              // User doesn't exist
const userEmailInput = this.myform.get('email').value;
              const userPassword1 = localStorage.getItem(userEmailInput);
             
              const storedRoleId = localStorage.getItem(userEmailInput);
              
              const userPasswordInput = this.myform.get('password').value;              
              const mobileNum = this.myform.get('mobileNum').value;
              const userName = this.myform.get('userName').value;
               console.log(storedRoleId, userRoleIdInput);
              if (
                
             
                storedRoleId == userRoleIdInput
              ) {
                const userData = {
                  userName: userName,
                  password: userPasswordInput,
                  mobileNum: mobileNum,
                  email: userEmailInput,
                  role: this.fetchedRoleData,
                };
                console.log("hello")
                this.http
                  .post<any>('http://localhost:8080/addUser', userData)
                  .subscribe(
                    (response) => {
                      console.log(response);
                      this.authService.saveUserData(response);
                      return response;
                    },
                    (error) => {
                      console.log(error);
                    }
                );
                // const numericPart = userRoleIdInput.replace(/\D/g, '');            
                // this.roleIdNumber = numericPart
                //   ? parseInt(numericPart, 10)
                //   : null;
                // this.http
                //   .get<any>(
                //     `http://localhost:8080/getUserByRoleId/${this.roleIdNumber}`
                //   )
                //   .subscribe(
                //     (response) => {
                //       console.log(response);
                //       this.authService.saveUserData(response);
                //       return response;
                //     },
                //     (error) => {
                //       console.log(error);
                //     }
                //   );
                if (userRoleIdInput.startsWith('emp')) {
                  this.authService.login();
                  console.log('two');
                  this.roleIdString = this.route.snapshot.queryParams['roleId'];
                  console.log(this.roleIdString);
                  this.router.navigate(['company'], {
                    queryParams: { roleid: this.roleIdString },
                    replaceUrl: true,
                  });
                } else {
                  console.log('three');
                  this.authService.login();
                  this.roleIdString = this.route.snapshot.queryParams['roleId'];
                  console.log(this.roleIdString);
                  this.router.navigate(['student'], {
                    queryParams: { roleid: this.roleIdString },
                    replaceUrl: true,
                  });
                }
              }
            }
          },

          (error) => {
            console.log(error);
            alert('Failed to check user existence');
          }
        );
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
