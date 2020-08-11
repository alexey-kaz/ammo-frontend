import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { MainPageModule } from './main-page/main-page.module';
import { PagesRoutingModule } from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    NbMenuModule,
    MainPageModule,
    ThemeModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
