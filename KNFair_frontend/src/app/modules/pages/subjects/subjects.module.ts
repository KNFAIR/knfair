import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './components/subjects/subjects.component';



@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubjectsComponent
  ]
})
export class SubjectsModule { }
