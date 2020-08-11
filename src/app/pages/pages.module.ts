import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import {ThemeModule} from "../app/@theme/theme.module";

@NgModule({
  imports: [
    PagesRoutingModule,
    NbMenuModule,
    ECommerceModule,
    ThemeModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
