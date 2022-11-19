import { Component } from '@angular/core';
import { AppComponent } from '../modules/core/components/app/app.component';

@Component({
  selector: 'app-notfound',
  templateUrl: './app.notfound.component.html',
})
export class AppNotfoundComponent {
    constructor(public app: AppComponent) {}
}
