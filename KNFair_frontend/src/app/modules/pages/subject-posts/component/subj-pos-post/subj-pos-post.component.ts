import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
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

  getImageUrl() {
    return `${environment.baseUrl}/socialPosts/find/${this.selectedPost.id}/image`
  }

}
