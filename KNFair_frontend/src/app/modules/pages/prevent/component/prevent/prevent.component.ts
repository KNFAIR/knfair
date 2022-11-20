import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PreventService } from '../../service/prevent.service';

@Component({
  selector: 'app-prevent',
  templateUrl: './prevent.component.html',
  styleUrls: ['./prevent.component.scss']
})
export class PreventComponent implements OnInit {

  edition = true;
  positive: Boolean;
  content: string;
  uploadUrl=`${environment.baseUrl}/upload`

  constructor(private service: PreventService) { }

  ngOnInit(): void {
  }

  onBasicUpload(event: any) {
    console.log('ok')
  }

  onCheck() {
    this.service.verifyPost(this.content).subscribe(response => {
      this.edition = false;
      this.positive = response;
    })
  }

  onCheckNext() {
    this.edition = true;
    this.positive = null;
    this.content = '';
  }

}
