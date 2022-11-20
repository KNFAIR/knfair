import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    ChartModule,
  ],
  exports: [
        DashboardComponent
  ]
})
export class DashboardModule { }
