import { Component, OnInit } from '@angular/core';
import { Subcject } from '../../../subjects/model/subcject';
import { SubjectsService } from '../../../subjects/service/subjects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  subjects: Subcject[];
  selectedSubject: Subcject;

  constructor(private service: SubjectsService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(response => {
      this.subjects=response;
    })
  }

}
