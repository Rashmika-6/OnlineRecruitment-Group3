import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contacts: any[] = [];
  loggedUser: any;
  form: FormGroup;
  senderEmail: string;
  userData: any;
  sender: string;
  public MessageData: any = null;
  constructor(
    private messageService: MessageService,
    private router: Router,
    private fb: FormBuilder,
    private authData: RoleService,
    private http: HttpClient
  ) {
    const localUser = localStorage.getItem('loggedUser');
    //console.log(localUser);
    if (localUser != null) {
      this.loggedUser = JSON.parse(localUser);
      console.log(this.loggedUser);
    }
  }

  ngOnInit(): void {
    this.userData = this.authData.getUserData();
    console.log(this.userData);
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
    });
    // this.loadContacts();
  }
  onSubmit(): void {
    emailjs.init('vDckiHN-IheQl14J9');

    const currentDate = new Date();
    if (localStorage.getItem('Admin') === '1') {
      this.senderEmail = 'admin@gmail.com';
      this.sender = 'Admin';
      //localStorage.setItem('Admin', '0');
      console.log(this.senderEmail);
    } else {
      this.senderEmail = this.userData.email;
      this.sender = this.userData['userName'];
    }
    const MessageData = {
      senderEmail: this.senderEmail,
      receiverEmail: this.form.get('email').value,
      message: this.form.get('message').value,
      date: currentDate,
    };
    this.http
      .post<any>('http://localhost:8080/api/messages/add', MessageData)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    this.sendEmail();
    console.log(this.form.value);
  }
  async sendEmail() {
    try {
      let response = await emailjs.send('service_tw42dwi', 'template_ruz1xlc', {
        sender: this.sender,
        message: this.form.get('message').value,
        reply_to: this.senderEmail,
        to_email: this.form.get('email').value,
      });
      alert('Email sent successfully');
    } catch (error) {
      console.error('Failed to send ', error);
      
    }
  }

  // loadContacts() {
  //   // Call the service method to fetch contacts from the backend
  //   this.messageService.addMessage().subscribe(
  //     (response: any) => {
  //       this.contacts = response;
  //     },
  //     (error: any) => {
  //       console.error('Error fetching contacts:', error);
  //     }
  //   );
  // }
}
