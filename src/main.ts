import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// Used for Camera UI. We import the pwa elements from the package
// and call it on th Window object
import {defineCustomElements} from '@ionic/pwa-elements/loader';
defineCustomElements(window);
