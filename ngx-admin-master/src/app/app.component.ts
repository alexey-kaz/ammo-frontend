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

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

 
}
