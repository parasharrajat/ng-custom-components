import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterViewInit
} from '@angular/core';
import components, { ComponentWithMeta } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  components = [];
  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;
  active: ComponentWithMeta;
  constructor(private facResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.components = components.getData();
  }
  ngAfterViewInit() {
    this.activateCompo(this.components[0]);
  }
  getPix(str: string) {
    return +str.split('px')[0];
  }
  prev(p: HTMLElement, $event: MouseEvent) {
    const target = ($event.target as HTMLElement);
    const rect = window.getComputedStyle(target);
    const space = target.offsetWidth + this.getPix(rect.marginInlineStart) + this.getPix(rect.marginInlineEnd);
    const visibleWidth = p.offsetWidth - (space * 2);
    const remainingScroll = p.scrollWidth - (p.scrollLeft + visibleWidth);
    p.scrollBy({
      behavior: 'smooth',
      left: -(remainingScroll - visibleWidth > 0 ? visibleWidth : remainingScroll)
    });
  }
  next(p: HTMLElement, $event: MouseEvent) {
    const target = ($event.target as HTMLElement);
    const rect = window.getComputedStyle(target);
    const space = target.offsetWidth + this.getPix(rect.marginInlineStart) + this.getPix(rect.marginInlineEnd);
    const visibleWidth = p.offsetWidth - (space * 2);

    const remainingScroll = p.scrollWidth - (p.scrollLeft + visibleWidth);
    p.scrollBy({
      behavior: 'smooth',
      left: remainingScroll - visibleWidth > 0 ? visibleWidth : remainingScroll
    });
  }
  activateCompo(c: ComponentWithMeta) {
    this.content.clear();
    const factory = this.facResolver.resolveComponentFactory(c.compo);
    this.content.createComponent(factory);
    this.active = c;
  }
}
