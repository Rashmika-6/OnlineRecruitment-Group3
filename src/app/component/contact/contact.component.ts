import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: any[] = [];
  loggedUser: any;
  

  constructor(private messageService: MessageService,private router:Router) { 
  const localUser = localStorage.getItem('loggedUser');
  if(localUser != null){
    this.loggedUser = JSON.parse(localUser)
  }
  }
  ngOnInit(): void {
    this.loadContacts();
   
  }

  loadContacts() {
    // Call the service method to fetch contacts from the backend
    this.messageService.addMessage().subscribe(
      (response: any) => {
        this.contacts = response;
      },
      (error: any) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }
}
