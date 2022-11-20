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
  selectedPost: any;
  manualStatus:false;
  edition: boolean;

  constructor(private service: SubjPostsService) { }

  ngOnInit(): void {
    this.subject = this.service.subj;
    this.service.getPosts(this.service.subj.id).subscribe(response => {
      this.posts = response[1];
    });
  }
  
  onChange(e: any) {
    let isChecked = e.checked;
    this.selectedPost.manualVerification = isChecked;
    this.service.updateManual(this.selectedPost).subscribe(response => {
      console.log('ok');
    });
  }


}
