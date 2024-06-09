import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../shared/models/job';

const BASIC_URL = 'http://localhost:8080/addUser';
const BASIC_URL1 = 'http://localhost:8080/api/role';


@Injectable({
  providedIn: 'root',
})
export class RecruitmentService {
  formData: any;
  jobs: Job[];
  private BASIC_URL2 = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  addUser(user: any): Observable<any> {
    this.http.post<any>('http://localhost:8080/addUser', user).subscribe(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
    return null;
  }

  addRole(user: any): Observable<any> {
    return this.http.post(BASIC_URL1, user);
  }
  getRoleInfoById(id: number): Observable<any> {
    return this.http.get<any>(`${BASIC_URL1}/${id}`);
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('http://localhost:8080/getAllJobs');
  }
  upload(appointmentId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(
      `${this.BASIC_URL2}/${appointmentId}/uploadResume`,
      formData,
      {
        reportProgress: true,
        responseType: 'text',
      }
    );
  }

  download(appointmentId: number): Observable<Blob> {
    return this.http.get(`${this.BASIC_URL2}/${appointmentId}/downloadResume`, {
      responseType: 'blob',
    });
  }
}
