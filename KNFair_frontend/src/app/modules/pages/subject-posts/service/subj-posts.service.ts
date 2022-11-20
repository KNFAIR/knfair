import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../../subjects/model/post';
import { Subcject } from '../../subjects/model/subcject';

@Injectable({
  providedIn: 'root'
})
export class SubjPostsService {

  public subj: Subcject;
  private baseUrl = `${environment.baseUrl}`;
  constructor(private http: HttpClient) { }

  public getPosts(subjectId: string): Observable<Post[][]> {
    return this.http.get<Post[][]>(`${this.baseUrl}/socialPosts/find/groupByFinancialEntity/${subjectId}`);
  }

  public updateManual(post: Post): any {
    return this.http.put(`${this.baseUrl}/socialPosts/update`, post);
  }

  
}
