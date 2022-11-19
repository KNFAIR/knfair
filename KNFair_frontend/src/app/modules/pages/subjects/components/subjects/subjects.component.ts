import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Post } from '../../model/post';
import { Subcject } from '../../model/subcject';
import { SubjectsService } from '../../service/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjects: Subcject[] = [];
  selectedSubcject: Subcject;
  negativePosts: Post[] = [];
  positivePosts: Post[] = [];

  constructor(private service: SubjectsService) { }

  ngOnInit(): void {
    this.service.getAllProducts()
    .subscribe(response => {
      this.subjects = response? response: [] ;
    })
  }

  getSubjectsNumber() {
    return this.subjects.length;
  }
  onBasicUpload(event) {
  }
  onRowSelect(selected: Subcject) {
    this.selectedSubcject = selected;
    this.service.getAllPosts(selected.id).subscribe(response => {
      if(response){
        this.positivePosts = response[0];
        this.negativePosts = response[1];
      } else {
        this.positivePosts = [];
        this.negativePosts = [];
      }
      
    });
  }
}
