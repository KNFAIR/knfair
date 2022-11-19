import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SubjectsComponent
  ]
})
export class SubjectsModule { }
