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
    // return this.http.get<Subcject[]>(`${this.baseUrl}/financialEntities/find/all`);
    return of([
{
    id: '1',
    financialEntityName: 'n1',
    financialEntityShortName: 'n1',
    financialEntityNip: 'nip1',
    financialEntityType: 'type'
},
{
  id: '2',
  financialEntityName: 'n2',
  financialEntityShortName: 'n2',
  financialEntityNip: 'nip2',
  financialEntityType: 'type'
},
{
  id: '3',
  financialEntityName: 'n3',
  financialEntityShortName: 'n3',
  financialEntityNip: 'nip3',
  financialEntityType: 'type'
}
    ]);
  }

  getAllPosts(subjectId: string): Observable<Post[][]> {
    // return this.http.get<Post[][]>(`${this.baseUrl}/find/autoVerification`);
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

 

}
