import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {environment} from 'src/environments/environment';
import { Post } from '../model/post';
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

  getAllPosts(subjectId: string): Observable<Subcject[][]> {
    return this.http.get<Subcject[][]>(`${this.baseUrl}/find/autoVerification`);
  }

 

}
