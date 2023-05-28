/*
  Title: main.ts
  Author: Erin Brady
  Date: 28 May 2023
  Description: Profile App root TS
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
