import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  inboxMessages: any[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadInboxMessages();
  }

  loadInboxMessages() {
    // Call the service method to fetch inbox messages from the backend
    this.messageService.getMessagesFrom().subscribe(
      (response: any) => {
        this.inboxMessages = response;
      },
      (error: any) => {
        console.error('Error fetching inbox messages:', error);
      }
    );
  }
}
