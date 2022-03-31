/*!

 =========================================================
 * Qbitss 2022
 =========================================================

 * Copyright 2020 KumikoSan
 * Licensed under MIT 

 =========================================================

 * 
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
