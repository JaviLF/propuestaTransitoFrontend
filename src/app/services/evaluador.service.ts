import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluador } from '../models/evaluador';

const baseURL = 'http://localhost:8000/api/evaluadores';

@Injectable({
  providedIn: 'root'
})
export class EvaluadorService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get<Evaluador[]>(baseURL);
  }

  read(id): Observable<any> {
    return this.httpClient.get<Evaluador>(`${baseURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
}
