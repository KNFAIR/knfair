import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfPreventComponent } from './components/self-prevent/self-prevent.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    SelfPreventComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule,
    InputTextareaModule,
    ButtonModule,
  ]
})
export class SelfValidateModule { }
