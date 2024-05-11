import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.css',
})
export class InterfaceComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phno: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      passingYear: ['', Validators.required],
      language: [''],
      skills: ['', Validators.required],
      projects: [''],
      resume: ['', Validators.required],
    });
  }

  // Getters for form controls
  get Fullname() {
    return this.myForm.get('fname');
  }
  get Email() {
    return this.myForm.get('email');
  }
  get Phno() {
    return this.myForm.get('phno');
  }
  get PassingYear() {
    return this.myForm.get('passingYear');
  }
  get Language() {
    return this.myForm.get('language');
  }
  get Skills() {
    return this.myForm.get('skills');
  }
  get Projects() {
    return this.myForm.get('projects');
  }
  get Resume() {
    return this.myForm.get('resume');
  }

  submitForm() {
    
    console.log(this.myForm.value);
  }
}
