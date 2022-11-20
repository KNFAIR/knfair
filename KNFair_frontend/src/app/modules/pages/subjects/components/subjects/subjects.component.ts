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
  filteredSubjects: Subcject[] = [];
  selectedSubcject: any;
  negativePosts: Post[] = [];
  positivePosts: Post[] = [];
  nameFilter='';
  nipFilter='';
  typeFilter='';

  constructor(private service: SubjectsService,
              private subjService: SubjPostsService,
              private router: Router) { }

  ngOnInit(): void {
    this.service.getAllProducts()
    .subscribe(response => {
      this.subjects = response? response: [];
      this.filteredSubjects = this.subjects;
    })
  }

  getSubjectsNumber() {
    return this.subjects.length;
  }
  onBasicUpload(event) {
  }
  onRowSelect(selected: any) {
    this.selectedSubcject = selected.data;
    this.service.getAllPosts(this.selectedSubcject.id).subscribe(response => {
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
    this.subjService.subj=this.selectedSubcject.data; 
    this.router.navigate(["subject","post","positive"])
  }

  onNegatives() {
    this.subjService.subj=this.selectedSubcject.data; 
    this.router.navigate(["subject","post","negative"])
  }

  onFilter(event: any){
    console.log(event.target.value);
    this.filteredSubjects=[]
    this.subjects.filter(s => {
      let result = true;
      result = result && (this.nameFilter==='' || s.financialEntityName.includes(this.nameFilter));
      result = result && (this.nipFilter==='' || s.financialEntityNip.includes(this.nipFilter));
      result = result && (this.typeFilter==='' || s.financialEntityType.includes(this.typeFilter));
      if(result) {
        this.filteredSubjects.push(s);
      }
    })
  }

}
