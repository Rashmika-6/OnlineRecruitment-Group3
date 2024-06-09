import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { HttpClient } from '@angular/common/http';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
})
export class InboxComponent implements OnInit {
  inboxMessages: any[] = [];
  userData: any;
  email: string;
  constructor(
    private authData: RoleService,
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.userData = this.authData.getUserData();
   
      const currentDate = new Date();
      if (localStorage.getItem('Admin') === '1') {
        this.email = 'admin@gmail.com';
  
        console.log(this.email);
      } else {
        this.email = this.userData.email;
      }
    this.loadInboxMessages();
  }

  loadInboxMessages() {
    this.http
      .get<any[]>(`http://localhost:8080/api/messages/receiver/${this.email}`)
      .subscribe(
        (data) => {
          console.log(data)
          this.inboxMessages = data;
        },
        (error) => {
          console.error('Error fetching inbox messages:', error);
        }
      );
  }
}
