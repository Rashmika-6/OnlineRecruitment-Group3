import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser'; // Import emailjs-com instead of '@emailjs/browser'
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  myForm: FormGroup;
  generatedOTP: string = '';
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/'
          ),
        ],
      ],
      otp: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async send() {
    emailjs.init('1rY5oNPpZKkxDy-sQ');
    this.generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    console.log(this.generatedOTP)
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

  verifyOTP() {
    const enteredOTP = this.myForm.value.otp;
     if (!enteredOTP) {
       alert('Please enter the OTP.');
       return; 
     }
    if (enteredOTP === this.generatedOTP) {
      alert('OTP verification successful!');
       this.router.navigate(['/first'], {
        //  queryParams: { reply_to: this.myForm.value.email },
         replaceUrl: true,
       });
   
      
    } else {
      alert('Incorrect OTP. Please try again.');
    }
   
    
  }
  get Email(): FormControl {
    return this.myForm.get('email') as FormControl;
  }
   
}
