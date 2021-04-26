import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supervisor } from '../models/supervisor';

const baseURL = 'http://localhost:8000/api/supervisores';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get<Supervisor[]>(baseURL);
  }

  read(id): Observable<any> {
    return this.httpClient.get<Supervisor>(`${baseURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
}
