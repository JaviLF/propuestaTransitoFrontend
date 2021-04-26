import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscrito } from '../models/inscrito';

const baseURL = 'http://localhost:8000/api/inscritos';

@Injectable({
  providedIn: 'root'
})
export class InscritoService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get<Inscrito[]>(baseURL);
  }

  read(id): Observable<any> {
    return this.httpClient.get<Inscrito>(`${baseURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
}
