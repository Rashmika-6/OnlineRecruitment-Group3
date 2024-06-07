import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css']
})
export class OutboxComponent implements OnInit {
  outboxMessages: any[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadOutboxMessages();
  }

  loadOutboxMessages() {
    // Call the service method to fetch outbox messages from the backend
    this.messageService.getMessagesTo().subscribe(
      (response: any) => {
        this.outboxMessages = response;
      },
      (error: any) => {
        console.error('Error fetching outbox messages:', error);
      }
    );
  }
}

