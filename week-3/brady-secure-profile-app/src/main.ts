/*
  Title: main.ts
  Author: Erin Brady
  Date: 3 June 2023
  Description: Enhanced App root TS
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
