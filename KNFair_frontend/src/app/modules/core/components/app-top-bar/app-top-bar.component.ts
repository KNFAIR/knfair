import {Component} from '@angular/core';
import {AppComponent} from '../../components/app/app.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-top-bar.component.html'
})
export class AppTopBarComponent {

  constructor(public app: AppComponent) {}

}
