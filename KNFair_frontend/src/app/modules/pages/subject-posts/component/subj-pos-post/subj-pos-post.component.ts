import { Component, OnInit } from '@angular/core';
import { Post } from '../../../subjects/model/post';
import { Subcject } from '../../../subjects/model/subcject';
import { SubjPostsService } from '../../service/subj-posts.service';

@Component({
  selector: 'app-subj-pos-post',
  templateUrl: './subj-pos-post.component.html',
  styleUrls: ['./subj-pos-post.component.scss']
})
export class SubjPosPostComponent implements OnInit {

  subject: Subcject;
  posts: Post[] = [];
  selectedPost: Post;
  constructor(private service: SubjPostsService) { }

  ngOnInit(): void {
    this.subject = this.service.subj;
    this.service.getPosts(this.subject.id).subscribe(response => {
      this.posts = response[0];
    });
  }

}
