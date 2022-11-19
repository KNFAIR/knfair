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

  getAllPosts(subjectId: string): Observable<Post[][]> {
    // return this.http.get<Post[][]>(`${this.baseUrl}/find/autoVerification`);
    return of([
      [
        {id:'1',
        postCreatedDate:'12-12-2022',
        facebookPostUrl: 'url1',
        manualVerification: null,
        autoVerification: true
      },
      {id:'2',
      postCreatedDate:'12-12-2022',
        facebookPostUrl: 'url2',
        manualVerification: null,
        autoVerification: true
      }
      ],
      [
        {id:'3',
        postCreatedDate:'12-12-2022',
        facebookPostUrl: 'url3',
        manualVerification: null,
        autoVerification: false
      },
      {id:'4',
      postCreatedDate:'12-12-2022',
        facebookPostUrl: 'url4',
        manualVerification: null,
        autoVerification: false
      }
      ]
    ]);
  }

 

}
