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
    // return this.http.get<Post[][]>(`${this.baseUrl}/find/groupByFinancialEntity/${subjectId}`);
    return of([
      [
        {id:'1',
        postCreatedDate:'12-12-2022',
        facebookPostUrl: 'url1',
        manualVerification: null,
        autoVerification: true,
        reason:''
      },
      {id:'2',
      postCreatedDate:'12-12-2022',
        facebookPostUrl: 'url2',
        manualVerification: null,
        autoVerification: true,
        reason:''
      }
      ],
      [
        {id:'3',
        postCreatedDate:'12-12-2022',
        facebookPostUrl: 'url3',
        manualVerification: null,
        autoVerification: false,
        reason:''
      },
      {id:'4',
      postCreatedDate:'12-12-2022',
        facebookPostUrl: 'url4',
        manualVerification: null,
        autoVerification: false,
        reason:''
      }
      ]
    ]);
  }

  public updateManual(post: Post): any {
    // return this.http.put(`${this.baseUrl}/post`, post);
    return of();
  }

  
}
