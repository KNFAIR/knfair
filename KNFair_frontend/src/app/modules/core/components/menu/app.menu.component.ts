import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app/app.component';
import {AppMainComponent} from '../main/app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    public model: any[];

    constructor(public app: AppComponent, public appMain: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            {label: 'Podmioty', icon: 'pi pi-fw pi-dollar', routerLink: ['/subject']},
            {label: "Alerty", icon: 'pi pi-fw pi-bookmark', routerLink: ["/alerts"]},
            {label: "Lista postów", icon: 'pi pi-fw pi-list', routerLink: ["/posts"]},
            {label: "Auto-weryfikacja", icon: 'pi pi-fw pi-check-square', routerLink: ["/prevent"]},
           
        ];
    }
}
