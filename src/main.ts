import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { platformBrowser } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));
