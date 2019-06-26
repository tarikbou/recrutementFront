import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CandidatService {
  url='http://localhost:8080/candidats';
 // headers :HttpHeaders=new HttpHeaders({ 'Content-type': 'application/json' });
  constructor(private httpClient: HttpClient) { };

  getCandidats(): Observable<Candidat[]> {
    return this.httpClient.get<Candidat[]>(this.url);
  }
  getCandidat(id: Number): Observable<Candidat> {
    return this.httpClient.get<Candidat>(`${this.url}/${id}`);
  }
  saveCandidat(candidat: Candidat): Observable<Candidat> {
    
      return this.httpClient.post<Candidat>(this.url, candidat,
        { headers: new HttpHeaders({ 'Content-type': 'application/json' }) })

  }
  updateCandidat(candidat: Candidat): Observable<void> {
    
      return this.httpClient.put<void>(`${this.url}/${candidat.id}`, candidat,
        { headers: new HttpHeaders({ 'Content-type': 'application/json' }) });

  }
  deleteCandidat(id: Number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

}