import { Component ,OnInit} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Confirmedvalidator } from '../../confirmvalidator.js';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrl: './change.component.css',
})
// export class ChangeComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {}
//   myForm = new FormGroup({
//     oldPassword: new FormControl('', [Validators.required]),
//     newPassword: new FormControl('', [Validators.required]),

//     confirmPassword: new FormControl('', [Validators.required]),

//   });

//   saveform() {}
//   get Pass(): FormControl {
//     return this.myForm.get('oldPassword') as FormControl;
//   }
//   get Npass(): FormControl {
//     return this.myForm.get('newPassword') as FormControl;
//   }
//   get Cpass(): FormControl {
//     return this.myForm.get('confirmPassword') as FormControl;
//   }

// }
export class ChangeComponent {
  myForm: FormGroup = new FormGroup({});
  constructor(private FB: FormBuilder) {
    this.myForm = FB.group(
      {
        oldPassword: new FormControl('', [Validators.required]),
        newPassword: new FormControl('', [Validators.required]),

        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validator: Confirmedvalidator('newPassword', 'confirmPassword'),
      }
    );
  }
  get f() {
    return this.myForm.controls;
  }
  get Pass(): FormControl {
    return this.myForm.get('oldPassword') as FormControl;
  }
  saveform() {}
}