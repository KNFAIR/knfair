import {Component} from '@angular/core';
import {AppBreadcrumbService} from '../../modules/core/service/app.breadcrumb.service';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'UI Kit' },
            { label: 'Form Layout', routerLink: ['/uikit/formlayout'] }
        ]);
    }

    selectedState: any = null;

    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];
}
