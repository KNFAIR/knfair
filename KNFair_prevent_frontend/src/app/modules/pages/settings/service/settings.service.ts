import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

    private baseUrl: string;

  constructor(private http: HttpClient) {
      this.baseUrl = `${environment.baseUrl}/user`;
  }

    saveColorScheme(theme: string): Observable<any> {
        return of({});
    }
}
