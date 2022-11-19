import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SubjPostsService } from '../../../subject-posts/service/subj-posts.service';
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

  constructor(private service: SubjectsService,
              private subjService: SubjPostsService,
              private router: Router) { }

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
  getPositiveNumber() {
    return this.positivePosts.length;
  }

  geNegativeNumber() {
    return this.negativePosts.length;
  }

  getAllNumber() {
    return this.positivePosts.length + this.negativePosts.length;
  }

  onPositives() {
    console.log('neg')
    this.subjService.subj=this.selectedSubcject; 
    this.router.navigateByUrl("/subject/post/positive")
  }

  onNegatives() {
    console.log('pos');
    this.subjService.subj=this.selectedSubcject; 
    this.router.navigateByUrl("/subject/post/negative")
  }

}
