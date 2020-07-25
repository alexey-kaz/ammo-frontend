/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
///import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { HttpClientXsrfModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { GridsterModule } from 'ngx-gridster'; 
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
//import { Observable } from 'rxjs/Rx';
import { ApiEndpointsService } from './services/api-endpoints.service';
import { ApiHttp } from './services/api-http.service';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule, NbThemeModule, NbLayoutModule, NbTabsetModule,
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { from } from 'rxjs';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
   // Observable,
    //BrowserAnimationsModule,
    //ApiHttp,
    HttpClientModule,
    AppRoutingModule,
   // ApiEndpointsService,
    HttpClientXsrfModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    GridsterModule,
    MarkdownModule.forRoot({loader: HttpClient, markedOptions: {provide: MarkedOptions, useValue: {smartypants: true, breaks: true}}}),
    
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  
})
export class AppModule {
}
