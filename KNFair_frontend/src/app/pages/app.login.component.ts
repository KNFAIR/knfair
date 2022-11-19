import { Component } from '@angular/core';
import {AppComponent} from '../modules/core/components/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent {
    constructor(public app: AppComponent) {}
}
