import {Component} from '@angular/core';
import {AppComponent} from '../app/app.component';
import {AppMainComponent} from '../main/app.main.component';

@Component({
    selector: 'app-topbar',
    templateUrl: 'app.topbar.component.html'
})
export class AppTopbarComponent {

    constructor(public app: AppComponent, public appMain: AppMainComponent) {}

}
