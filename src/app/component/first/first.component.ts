import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Confirmedvalidator } from '../../confirmvalidator';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { RoleService } from '../../role.service';

import { RecruitmentService } from '../../service/recruitment.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'], // Use styleUrls instead of styleUrl
})
export class FirstComponent implements OnInit {
  myForm: FormGroup; // Declare myForm variable
  generatedOTP: string = '';
  constructor(private authService: RoleService,
    private fb: FormBuilder,
    
    private router: Router,
    private formDataService: RecruitmentService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        userName: ['', [Validators.required]],

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
        otp: ['', Validators.required],
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

        nationality: ['', [Validators.required]],
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
  async send() {
    emailjs.init('1rY5oNPpZKkxDy-sQ');
    this.generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    console.log(this.generatedOTP);
    alert('OTP sent successfully');
    // try {
    //   let response = await emailjs.send('service_1nyzcog', 'template_4o7ao4m', {
    //     to_email: this.myForm.value.email,
    //     message: this.generatedOTP,

    //   });
    //   alert('OTP sent successfully! Please check your inbox.');
    // } catch (error) {
    //   console.error('Failed to send OTP:', error);
    //   alert('Failed to send OTP. Please try again later.');
    // }
  }
  submitForm1() {
    if (this.myForm.valid) {
      // Form is valid, submit the form
      console.log('Form is valid');
      console.log(this.myForm.value.email);
      
     this.router.navigate(['/roletype'], {
       queryParams: { reply_to: this.myForm.value.email },
       state: { data: this.myForm.value },
       replaceUrl: true,
     });
    } else {
      // Form is not valid, show errors
      console.log('Form is not valid');
      console.log(this.myForm.value);
    }
  }
  submitEmail() {
    // const email = this.myForm.value.email;
    // const pass = this.myForm.value.pass;
    // if (!email || !pass) {
    //   alert('Please fill in both email and password fields.');
    //   return; // Stop further execution if any field is empty
    // }

    // this.router.navigate(['/email'], { replaceUrl: true });

    const userEmail = this.myForm.value.email;

    const password = this.myForm.value.password;

    localStorage.setItem(userEmail, password);

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
  verifyOTP() {
    const enteredOTP = this.myForm.value.otp;
    if (!enteredOTP) {
      alert('Please enter the OTP.');
      return;
    }
    if (enteredOTP === this.generatedOTP) {
      alert('OTP verification successful!');
    } else {
      alert('Incorrect OTP. Please try again.');
    }
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


 
  
