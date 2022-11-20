import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './components/alerts/alerts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenu } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    TableModule,
    PaginatorModule,
    PanelModule,
    InputSwitchModule,
  ],
  exports: [
    AlertsComponent
  ]
})
export class AlertsModule { }
