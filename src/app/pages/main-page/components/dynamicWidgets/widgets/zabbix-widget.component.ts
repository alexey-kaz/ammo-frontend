import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
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
  private refreshIntervalId;
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}
  subscriptions: Subscription = new Subscription();
  change_sub: Subscription;
  change: boolean;
  delete_sub: Subscription;
  zabbix_data;

  ngOnInit(): void {
    this.resizeSub = this.resizeEvent.subscribe((widget) => {
      if (widget === this.widget) { // or check id , type or whatever you have there
        // resize your widget, chart, map , etc.
        console.log(widget);
      }
    });
    let auth;
    this.http.post(`http://172.30.7.141:8081/api_jsonrpc.php`, {
      "jsonrpc": "2.0",
      "method": "user.login",
      "params": {
        "user": "Admin",
        "password": "zabbix",
      },
      "id": 1,
      "auth": null,
    }).subscribe((data: any) => {
        auth = data;
        console.log(data);
        console.log(data.result);
        this.http.post('http://172.30.7.141:8081/api_jsonrpc.php', {
          "jsonrpc": "2.0",
          "method": "item.get",
          "params": {
            "search": {
              "key_": "system.cpu.load[all,avg1]",
            },
            "sortfield": "name",
          },
          "auth": auth.result,
          "id": 0,
        }).subscribe(data1 => {
            this.data = data1;
            this.data = this.data.result;
            console.log(this.data);
          },
          error => console.log(error),
        );
      },
      error => console.log(error),
    );
  }
  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }

}
