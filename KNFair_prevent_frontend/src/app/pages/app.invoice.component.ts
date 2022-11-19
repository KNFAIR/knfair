import {Component} from '@angular/core';
import {AppBreadcrumbService} from '../modules/core/service/app.breadcrumb.service';
import {AppComponent} from '../modules/core/components/app/app.component';

@Component({
    templateUrl: './app.invoice.component.html'
})
export class AppInvoiceComponent {

    constructor(private breadcrumbService: AppBreadcrumbService, public app: AppComponent) {
        this.breadcrumbService.setItems([
            { label: 'Pages' },
            { label: 'Invoice', routerLink: ['/pages/invoice'] }
        ]);
    }

    print() {
        window.print();
    }
}
