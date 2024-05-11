import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Confirmedvalidator } from '../../confirmvalidator';
import { Router } from '@angular/router';
import { RecruitmentService } from '../../service/recruitment.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'], // Use styleUrls instead of styleUrl
})
export class FirstComponent implements OnInit {
  myForm: FormGroup; // Declare myForm variable

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formDataService: RecruitmentService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        userName: ['', [Validators.required]],
        address: ['', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(
              '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
            ),
          ],
        ],
        password: ['', [Validators.required]],
        mobileNum: [
          '',
          [
            Validators.required,
            Validators.pattern('[789][0-9]{9}'),
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        dob: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: Confirmedvalidator('password', 'confirmPassword'), // Use validators instead of validator
      }
    );
  }
  get f() {
    return this.myForm.controls;
  }

  submitForm() {
    // const email = this.myForm.value.email;
    // const pass = this.myForm.value.pass;
    // if (!email || !pass) {
    //   alert('Please fill in both email and password fields.');
    //   return; // Stop further execution if any field is empty
    // }

    this.router.navigate(['/email']);

    // const userEmail = this.myForm.value.email;

    // const password = this.myForm.value.pass;

    // localStorage.setItem('userEmail', userEmail);
    // localStorage.setItem('userPassword', password);
//console.log(this.myForm.value)
    // this.formDataService.addUser(this.myForm.value).subscribe(
    //   (response) => {
    //     console.log('User registered successfully:', response);
    //     this.router.navigate(['/email'])
    //     // You can navigate to another page or show a success message here
    //   },
    //   (error) => {
    //     console.error('Error occurred while registering user:', error);
    //     // Handle error accordingly
    //   }
    // );
  }
  get Fullname(): FormControl {
    return this.myForm.get('userName') as FormControl;
  }
  get Address(): FormControl {
    return this.myForm.get('address') as FormControl;
  }
  get Email(): FormControl {
    return this.myForm.get('email') as FormControl;
  }
  get Pass(): FormControl {
    return this.myForm.get('password') as FormControl;
  }
  get Phno(): FormControl {
    return this.myForm.get('mobileNum') as FormControl;
  }
  get Dob(): FormControl {
    return this.myForm.get('dob') as FormControl;
  }
}


 
  
