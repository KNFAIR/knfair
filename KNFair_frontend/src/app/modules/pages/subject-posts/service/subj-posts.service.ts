import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../../subjects/model/post';
import { Subcject } from '../../subjects/model/subcject';

@Injectable({
  providedIn: 'root'
})
export class SubjPostsService {

  private _subj: Subcject;
  private baseUrl = `${environment.baseUrl}`;
  constructor(private http: HttpClient) { }

  get subj(): Subcject {
    return this._subj;
  }

  set subj(subj: Subcject) {
    this._subj = subj;
  }

  public getPosts(subjectId: string): Observable<Post[][]> {
    return this.http.get<Post[][]>(`${this.baseUrl}/find/groupByFinancialEntity/${subjectId}`);
  }

  
}
