import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen';

const baseURL = 'http://localhost:8000/api/examenes';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get<Examen[]>(baseURL);
  }

  read(id): Observable<any> {
    return this.httpClient.get<Examen>(`${baseURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
}
