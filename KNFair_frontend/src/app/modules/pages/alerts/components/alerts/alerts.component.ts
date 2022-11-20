import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SubjPostsService } from '../../../subject-posts/service/subj-posts.service';
import { Post } from '../../../subjects/model/post';
import { Subcject } from '../../../subjects/model/subcject';
import { SubjectsService } from '../../../subjects/service/subjects.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  subjects: Subcject[];
  selectedSubject: Subcject;
  posts: Post[];
  selectedPost: any;
  

  constructor(private service: SubjectsService,
              private postService: SubjPostsService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(response => {
      this.subjects = response;
      this.selectedSubject = this.subjects[0];
      this.onChangeSubject({data: this.selectedSubject.id});
    });
  }

  onChangeSubject(event: any) {
    this.service.getAllPosts(event.value).subscribe(response => {
      this.posts = [];
      response[1].forEach(p => this.posts.push(p));
      response[0].forEach(p => this.posts.push(p));
    })
  }

  onChange(e: any) {
    let isChecked = e.checked;
    this.selectedPost.manualVerification = isChecked;
    this.postService.updateManual(this.selectedPost).subscribe(response => {
      console.log('ok');
    });
  }

  getImageUrl() {
    return `${environment.baseUrl}/post/${this.selectedPost.id}/image`
  }

}
