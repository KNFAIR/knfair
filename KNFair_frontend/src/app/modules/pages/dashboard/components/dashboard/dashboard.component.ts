import { Component, OnInit } from '@angular/core';
import { Post } from '../../../subjects/model/post';
import { Subcject } from '../../../subjects/model/subcject';
import { SubjectsService } from '../../../subjects/service/subjects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  subjects: Subcject[] = [];
  selectedSubject: Subcject;
  periods: any[];
  selectedPeriod;
  postsData: any;
  revenueChartOptions: any;
  influData: any;
  influs: any[] = [];

  constructor(private service: SubjectsService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(response => {
      this.subjects = response;
      this.loadInflus();
    });

    this.periods = [
      { k: 1, v: 'Dziś' },
      { k: 2, v: 'Ostatnie 3 dni' },
      { k: 3, v: 'Ostatni tydzień' },
      { k: 4, v: 'Ostatni miesiąc' },
      { k: 5, v: 'Ostatni rok' }
    ];
    this.postsData = this.getPostData();
    this.revenueChartOptions = {
      responsive: true,
      hover: {
        mode: 'index'
      },
      scales: {
        y: {
          ticks: {
            min: 0,
            max: 60,
            stepSize: 5
          }
        }
      }
    };
    this.influData={
      labels: ['pozytywne', 'negatywne', 'W trakcie oceny'],
      datasets: [
          {
              data: [30, 18, 36],
              backgroundColor: [
                  '#0F8BFD',
                  '#FC6161',
                  '#545C6B',
              ],
              hoverBackgroundColor: [
                  '#0F8BFD',
                  '#FC6161',
                  '#545C6B',
              ],
              borderColor: 'transparent',
              fill: true
          }
      ]
  };
  }

  onChangeSubject(event: any) {
    const dataSet1 = [
      [37, 34, 21, 27, 10, 18, 15],
      [31, 27, 30, 37, 23, 29, 20],
      [21, 7, 13, 3, 19, 11, 6],
      [47, 31, 35, 20, 46, 39, 25],
      [11, 6, 15, 63, 31, 22, 2],
    ];
    const dataSet2 = [
      [31, 27, 30, 37, 23, 29, 20],
      [47, 31, 35, 20, 46, 39, 25],
      [37, 34, 21, 27, 10, 18, 15],
      [21, 7, 13, 3, 19, 11, 6],
      [27, 32, 12, 31, 16, 8, 5],
    ];

    if (event.value.code === '1') {
      this.postsData.datasets[0].data = dataSet2[parseInt('0')];
      this.postsData.datasets[1].data = dataSet2[parseInt('1')];
      this.postsData.datasets[2].data = dataSet2[parseInt('2')];
      this.postsData.datasets[3].data = dataSet2[parseInt('3')];
      this.postsData.datasets[3].data = dataSet2[parseInt('4')];
    } else {
      this.postsData.datasets[0].data = dataSet1[parseInt('0')];
      this.postsData.datasets[1].data = dataSet1[parseInt('1')];
      this.postsData.datasets[2].data = dataSet1[parseInt('2')];
      this.postsData.datasets[3].data = dataSet1[parseInt('3')];
      this.postsData.datasets[3].data = dataSet1[parseInt('4')];
    }
  }

  onChangePeriod(event: any) {
    const dataSet1 = [
      [37, 34, 21, 27, 10, 18, 15],
      [31, 27, 30, 37, 23, 29, 20],
      [21, 7, 13, 3, 19, 11, 6],
      [47, 31, 35, 20, 46, 39, 25],
      [11, 6, 15, 63, 31, 22, 2],
    ];
    const dataSet2 = [
      [31, 27, 30, 37, 23, 29, 20],
      [47, 31, 35, 20, 46, 39, 25],
      [37, 34, 21, 27, 10, 18, 15],
      [21, 7, 13, 3, 19, 11, 6],
      [27, 32, 12, 31, 16, 8, 5],
    ];

    if (event.value.code === '1') {
      this.postsData.datasets[0].data = dataSet2[parseInt('0')];
      this.postsData.datasets[1].data = dataSet2[parseInt('1')];
      this.postsData.datasets[2].data = dataSet2[parseInt('2')];
      this.postsData.datasets[3].data = dataSet2[parseInt('3')];
      this.postsData.datasets[3].data = dataSet2[parseInt('4')];
    } else {
      this.postsData.datasets[0].data = dataSet1[parseInt('0')];
      this.postsData.datasets[1].data = dataSet1[parseInt('1')];
      this.postsData.datasets[2].data = dataSet1[parseInt('2')];
      this.postsData.datasets[3].data = dataSet1[parseInt('3')];
      this.postsData.datasets[3].data = dataSet1[parseInt('4')];
    }
  }

  onChangeInluPeriod(event: any) {
    
  }

  onInfluSelect(id: string){
    let dt = this.influs.filter(i => i.id = id)[0];
    this.influData.datasets[0].data = [dt.pos, dt.neg, 0]
  }

  private loadInflus() {
   this.subjects
   .filter(s => s.financialEntityType == 'INFLUENCER')
   .forEach(i => {
      this.service.getAllPosts(i.id).subscribe(response => {
        this.influs.push({
          id: i.id,
          name: i.financialEntityName,
          pos: response[0].length,
          neg: response[1].length
        })
      })
   })
  }

  private getPostData() {
    return {
      labels: ['0:00 - 4:00', '4:00 - 8:00', '8:00 - 12:00', '12:00 - 16:00', '16:00 - 20:00', '20:00 - 24:00'],
      datasets: [
        {
          label: 'Razem',
          data: [37, 34, 21, 27, 10, 18, 15],
          borderColor: '#350657',
          pointBackgroundColor: '#350657',
          backgroundColor: 'rgba(53, 6, 87, 0.15)',
          fill: true,
          tension: .4
        },
        {
          label: 'AI pozytywne',
          data: [31, 27, 30, 37, 23, 29, 20],
          borderColor: '#06730b',
          pointBackgroundColor: '#06730b',
          backgroundColor: 'rgba(6, 115, 11, 0.15)',
          fill: true,
          tension: .4
        },
        {
          label: 'AI negatywne',
          data: [21, 7, 13, 3, 19, 11, 6],
          borderColor: '#a12d06',
          pointBackgroundColor: '#a12d06',
          backgroundColor: 'rgba(161, 45, 6, 0.15)',
          fill: true,
          tension: .4
        },
        {
          label: 'Manualne pozytywne',
          data: [47, 31, 35, 20, 46, 39, 25],
          borderColor: '#065ea1',
          pointBackgroundColor: '#065ea1',
          backgroundColor: 'rgba(6, 94, 161,0.15)',
          fill: true,
          tension: .4
        },
        {
          label: 'Manualne negatywne',
          data: [5, 3, 9, 1, 18, 4, 1],
          borderColor: '#b80802',
          pointBackgroundColor: '#b80802',
          backgroundColor: 'rgba(184, 8, 2,0.15)',
          fill: true,
          tension: .4
        }]
    }
  }


}
