import {Component, Input, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer, ViewChild} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MenuItem, ScrollPanel} from 'primeng/primeng';
import {AppComponent} from '../app/app.component';
import { menuModel } from './menu-model';


@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html'
})
export class AppMenuComponent implements OnInit, AfterViewInit {

  
  @Input() reset: boolean;

  model: any[];

  @ViewChild('scrollPanel') layoutMenuScrollerViewChild: ScrollPanel;

  constructor(public app: AppComponent) {}

  ngAfterViewInit() {
    setTimeout(() => {this.layoutMenuScrollerViewChild.moveBar(); }, 100);
  }

  ngOnInit() {
      this.model = menuModel;
  }

  changeTheme(theme) {
      const themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');
      themeLink.href = '../../../../../assets/theme/theme-' + theme + '.css';
  }

  changeLayout(theme) {
      const layoutLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('layout-css');
      layoutLink.href = '../../../../../assets/layout/css/layout-' + theme + '.css';
  }
}
