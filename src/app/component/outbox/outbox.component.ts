import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { RoleService } from '../../role.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css'],
})
export class OutboxComponent implements OnInit {
  outboxMessages: any[] = [];
  userData: any;
  email: string;
  constructor(
    private messageService: MessageService,
    private authData: RoleService,
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
    console.log(this.email)
    this.loadOutboxMessages();
  }

  loadOutboxMessages() {
    this.http
      .get<any[]>(`http://localhost:8080/api/messages/sender/${this.email}`)
      .subscribe(
        (data) => {
          console.log(data);
          this.outboxMessages = data;
        },
        (error) => {
          console.error('Error fetching inbox messages:', error);
        }
      );
  }
}

