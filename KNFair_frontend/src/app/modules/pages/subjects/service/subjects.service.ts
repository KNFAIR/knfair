import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {environment} from 'src/environments/environment';
import { Inlfu } from '../../dashboard/model/inlfu';
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

  getAllPosts(subjectId: string): Observable<Post[][]> {
    return this.http.get<Post[][]>(`${this.baseUrl}/socialPosts/find/groupByFinancialEntity/${subjectId}`);
  }

  getInflus(): Observable<Inlfu[]> {
    return this.http.get<Inlfu[]>(`${this.baseUrl}/socialPosts/influ`);
  }

}
