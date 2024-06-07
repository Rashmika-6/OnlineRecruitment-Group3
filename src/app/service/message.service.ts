import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = 'http://localhost:8080/api/messages'; // Replace with your backend API base URL

  constructor(private http: HttpClient) { }

  // Fetch contacts from the backend
  addMessage(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/add`);
  }

  // Fetch inbox messages from the backend
  getMessagesFrom(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/from/{sender}`);
  }

  // Fetch outbox messages from the backend
  getMessagesTo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/to/{receiverId}`);
  }
}

