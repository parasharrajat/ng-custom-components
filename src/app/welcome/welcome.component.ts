import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as markdown from 'markdown-it';
@Component({
  selector: 'pop-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  readMe: string | ArrayBuffer;
  // headings = new Map<string, string>();
  md = new markdown();
  constructor() { }

  ngOnInit(): void {
    this.getReadMe();
  }
  ngAfterViewInit() {
  }

  async getReadMe() {
    this.readMe = await (await fetch('https://raw.githubusercontent.com/parasharrajat/ng-custom-components/master/README.md', {
      method: 'get',
    })).text();
    // const headingsReg = /^#+(?<heading>.+)(?<content>[^#]*)/m;
  }

}
