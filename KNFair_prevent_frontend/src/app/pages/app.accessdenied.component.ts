import { Component } from '@angular/core';
import { AppComponent } from '../modules/core/components/app/app.component';

@Component({
  selector: 'app-accessdenied',
  templateUrl: './app.accessdenied.component.html',
})
export class AppAccessdeniedComponent {
    constructor(public app: AppComponent) {}
}
