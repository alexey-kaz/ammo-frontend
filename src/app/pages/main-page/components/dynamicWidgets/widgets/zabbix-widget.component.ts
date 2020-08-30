import { Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {GridsterItem} from "angular-gridster2";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-widget-zabbix',
  template: `
    <nb-card size=giant>
      <nb-card-body>
        zabbix
      </nb-card-body>
    </nb-card>
  `,
})
export class ZabbixWidgetComponent implements OnInit, OnDestroy {
  @Input()
  widget;
  @Input()
  resizeEvent: EventEmitter<GridsterItem>;
  resizeSub: Subscription;
  data;
  constructor(private http: HttpClient) {}
  auth;

  ngOnInit(): void {
    this.resizeSub = this.resizeEvent.subscribe((widget) => {
      if (widget === this.widget) { // or check id , type or whatever you have there
        // resize your widget, chart, map , etc.
        console.log(widget);
      }
    });
    this.http.get('http://localhost:3000/get_zabbix_cpu',
      { responseType: 'text'}).subscribe((data: any) => {
      console.log(JSON.parse(data));
    });
  }
  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }

}
