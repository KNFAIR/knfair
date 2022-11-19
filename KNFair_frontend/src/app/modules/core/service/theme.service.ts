import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.baseUrl}/user/theme`;
    }

    getColorScheme(): Observable<string> {
        return of('light');
    }
}
