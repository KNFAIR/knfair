import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBreadcrumbComponent } from './components/app-breadcrumb/app-breadcrumb.component';
import {AppRoutes} from '../../app.routes';
import { BreadcrumbService } from './service/breadcrumb.service';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { AppComponent } from './components/app/app.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppTopBarComponent } from './components/app-top-bar/app-top-bar.component';
import { AppSubMenuComponent } from './components/app-sub-menu/app-sub-menu.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    AppBreadcrumbComponent,
    AppMenuComponent,
    AppComponent,
    AppFooterComponent,
    AppTopBarComponent,
    AppSubMenuComponent,
  ],
  providers: [
    BreadcrumbService
  ],
  imports: [
    AppRoutes,
    CommonModule,
    ScrollPanelModule
  ],
  exports: [
    AppComponent
  ]
})
export class CoreModule { }
