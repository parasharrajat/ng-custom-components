import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pop-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
