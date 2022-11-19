import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './components/app/app.component';
import {RouterModule} from '@angular/router';
import {AppBreadcrumbComponent} from './components/breadcrumb/app.breadcrumb.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {AppFooterComponent} from './components/footer/app.footer.component';
import {AppMainComponent} from './components/main/app.main.component';
import {AppMenuComponent} from './components/menu/app.menu.component';
import {AppMenuitemComponent} from './components/menuitem/app.menuitem.component';
import {AppRightMenuComponent} from './components/rightmenu/app.rightmenu.component';
import {AppTopbarComponent} from './components/topbar/app.topbar.component';
import {CalendarModule} from 'primeng/calendar';
import {AppBreadcrumbService} from './service/app.breadcrumb.service';
import {MenuService} from './service/app.menu.service';



@NgModule({
  declarations: [
      AppComponent,
      AppBreadcrumbComponent,
      AppFooterComponent,
      AppMainComponent,
      AppMenuComponent,
      AppMenuitemComponent,
      AppRightMenuComponent,
      AppTopbarComponent
  ],
    providers: [
        AppBreadcrumbService,
        MenuService
    ],
    imports: [
        CommonModule,
        RouterModule,
        BreadcrumbModule,
        InputTextModule,
        FormsModule,
        CalendarModule,
    ],
    exports: [
        AppComponent
    ]
})
export class CoreModule { }
