import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    PostsComponent
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
    PostsComponent
  ]
})
export class PostsModule { }
