import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {environment} from 'src/environments/environment';
import { Subcject } from '../model/subcject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private baseUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {
   }

  public getAllProducts(): Observable<Subcject[]>{
    return this.http.get<Subcject[]>(`${this.baseUrl}/financialEntities/find/all`);
  }

  getAllPosts() {
    
  }
}
