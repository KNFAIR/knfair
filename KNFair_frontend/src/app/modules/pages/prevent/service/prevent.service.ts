import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreventService {

  private baseUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }

  public verifyPost(content: string): Observable<Boolean> {
    return this.http.post<Boolean>(`${this.baseUrl}/post/verify`, {content: content});
  }
}
