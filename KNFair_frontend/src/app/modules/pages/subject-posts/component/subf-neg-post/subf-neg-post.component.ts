import { Component, OnInit } from '@angular/core';
import { Post } from '../../../subjects/model/post';
import { Subcject } from '../../../subjects/model/subcject';
import { SubjPostsService } from '../../service/subj-posts.service';

@Component({
  selector: 'app-subf-neg-post',
  templateUrl: './subf-neg-post.component.html',
  styleUrls: ['./subf-neg-post.component.scss']
})
export class SubfNegPostComponent implements OnInit {

  subject: Subcject;
  posts: Post[] = [];
  constructor(private service: SubjPostsService) { }

  ngOnInit(): void {
    this.subject = this.service.subj;
    this.service = 
  }


}
