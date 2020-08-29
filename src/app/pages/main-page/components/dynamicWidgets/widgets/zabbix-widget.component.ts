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
    this.http.get('http://localhost:3000/get_auth_token',
      { responseType: 'text'}).subscribe((data: any) => {
      this.auth = data;
      console.log(data);
    });
    console.log(this.auth);
    this.http.post('http://172.30.7.141:8081/api_jsonrpc.php',
      {
        "jsonrpc": "2.0",
        "auth": this.auth,
        "method": "item.get",
        "params": {
          "search": {
            "key_": "cpu.util",
          },
          "output": "extend",
          "sortfield": "name",
        },
      }).subscribe((data: any) => {
        console.log(data);
      },
      error => console.log(error),
    );
  }
  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }

}
