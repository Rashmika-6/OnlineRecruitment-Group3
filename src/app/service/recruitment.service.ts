import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/addUser';
const BASIC_URL1 = 'http://localhost:8080/api/role';

@Injectable({
  providedIn: 'root',
})
export class RecruitmentService {
  formData: any;
  constructor(private http: HttpClient) {}

  addUser(user: any): Observable<any> {
   this.http.post<any>('http://localhost:8080/addUser', user).subscribe(
      response => {
       console.log(response);
       return response;
     },
     error => {
       console.log(error);
     }
    )
    return null;
  }

  addRole(user: any): Observable<any> {
    return this.http.post(BASIC_URL1, user);
  }
  getRoleInfoById(id: number): Observable<any> {
    return this.http.get<any>(`${BASIC_URL1}/${id}`);
  }
}
