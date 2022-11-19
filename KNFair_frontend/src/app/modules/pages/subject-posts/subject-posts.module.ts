import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjPosPostComponent } from './component/subj-pos-post/subj-pos-post.component';
import { SubfNegPostComponent } from './component/subf-neg-post/subf-neg-post.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';



@NgModule({
  declarations: [
    SubjPosPostComponent,
    SubfNegPostComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,

  ],
  exports: [
    SubjPosPostComponent,
    SubfNegPostComponent
  ]
})
export class SubjectPostsModule { }
