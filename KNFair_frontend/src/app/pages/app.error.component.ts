import { Component } from '@angular/core';
import {AppComponent} from '../modules/core/components/app/app.component';

@Component({
  selector: 'app-error',
  templateUrl: './app.error.component.html',
})
export class AppErrorComponent {
    constructor(public app: AppComponent) {}
}
