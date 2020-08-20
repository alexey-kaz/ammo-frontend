import {ChangeDetectionStrategy, Component, EventEmitter,
  Input, OnDestroy, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {GridsterItem} from 'angular-gridster2';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-widget-ram',
  template: `
    <nb-card>
      <nb-card-body  [innerText]='data'>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RAMWidgetComponent implements OnInit, OnDestroy {
  @Input()
  widget;
  @Input()
  resizeEvent: EventEmitter<GridsterItem>;

  resizeSub: Subscription;
  data;
  /* tslint:disable:no-unused-variable */
  private refreshIntervalId;
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}
  subscriptions: Subscription = new Subscription();
  change_sub: Subscription;
  change: boolean;
  delete_sub: Subscription;

  getData(dataparse): void {
    const filesize = require("filesize");
    const data = JSON.parse(dataparse);
    this.data = ("total: " + filesize(data.mem.total) + "\nfree: " + filesize(data.mem.free) +
      "\nused: " + filesize(data.mem.used) + "\nactive: " + filesize(data.mem.active) + "\navailable: "
      + filesize(data.mem.available));
    // console.log(data);
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.resizeSub = this.resizeEvent.subscribe((widget) => {
      if (widget === this.widget) { // or check id , type or whatever you have there
        // resize your widget, chart, map , etc.
        console.log(widget);
      }
    });

    this.subscriptions = this.http.get('http://localhost:3000/ram',
      { responseType: 'text'}).subscribe((dataparse: any) => {
      this.getData(dataparse);
    });
    this.refreshIntervalId = setInterval( () => {
        this.subscriptions = this.http.get('http://localhost:3000/ram',
          { responseType: 'text'}).subscribe((dataparse: any) => {
            this.getData(dataparse);
        });
    }, 1000);

  }

  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
    this.subscriptions.unsubscribe();
  }
}
