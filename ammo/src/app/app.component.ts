/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/* import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: `
    <nb-layout>
    
      <nb-layout-header fixed>
      <!-- Insert header here -->
      </nb-layout-header>
    
      <nb-layout-column>
    
    <router-outlet></router-outlet>
      </nb-layout-column>
    
      <nb-layout-footer fixed>
      <!-- Insert footer here -->
      </nb-layout-footer>
    
    </nb-layout>
 t>',
})

export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
} */


  
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { User } from './user';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'ngx-app',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template:  '<router-outlet></router-outlet>', 
  
  
}) 



 export class AppComponent {
    user: User;
 
    constructor(private http: HttpClient){}
      
    ngOnInit(){
        this.http.get('assets/user.json').subscribe((data:User) => console.warn(data));  
        this.http.get('assets/user.json').subscribe((data:User) => this.user=data);
    }


  /* constructor(){} */
} 

/* export class AppComponent implements OnInit { 
   
  user: User;

  constructor(private http: HttpClient){}
    
  ngOnInit(){
        
      this.http.get('assets/user.json').subscribe((data:User) => this.user=data);
  }
} */