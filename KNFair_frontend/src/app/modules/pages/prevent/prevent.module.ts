import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreventComponent } from './component/prevent/prevent.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    PreventComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputTextareaModule,
    FormsModule,
    FileUploadModule,
    ButtonModule,
  ],
  exports:[
    PreventComponent,
    
  ]
})
export class PreventModule { }
