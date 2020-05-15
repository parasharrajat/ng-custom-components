import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector, Type, Component, DoBootstrap, ApplicationRef, isDevMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import components from './components';
import { AppComponent } from './app.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [Test2Component]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    components.getData().forEach(c => {
      this.addCustomComponent(c.name, c.compo);
    });
  }

  addCustomComponent<T>(name: string, c: Type<T>) {
    const el = createCustomElement(c, { injector: this.injector }) as any;
    customElements.define(name, el);
  }
  // necessary
  ngDoBootstrap(appRef: ApplicationRef) {
    if (isDevMode()) {
      appRef.bootstrap(AppComponent);
    }
  }
}
