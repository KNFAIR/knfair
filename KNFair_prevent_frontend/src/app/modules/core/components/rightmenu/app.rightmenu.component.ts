import {Component} from '@angular/core';
import {AppMainComponent} from '../main/app.main.component';

@Component({
    selector: 'app-rightmenu',
    templateUrl: './app.rightmenu.component.html'
})
export class AppRightMenuComponent {
    date: Date;

    constructor(public appMain: AppMainComponent) {}
}
