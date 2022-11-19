import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FileUploadModule,
    TableModule,
    PaginatorModule,
        
  ],
  exports: [
    SubjectsComponent
  ]
})
export class SubjectsModule { }
