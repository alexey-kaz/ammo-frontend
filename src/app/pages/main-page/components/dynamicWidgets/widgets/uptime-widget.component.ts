import {ChangeDetectionStrategy, Component, EventEmitter,
  Input, OnDestroy, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {GridsterItem} from 'angular-gridster2';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-widget-uptime',
  template: `
    <nb-card>
      <nb-card-body  [innerText]='data'>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UptimeWidgetComponent implements OnInit, OnDestroy {
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

  ngOnInit(): void {
    this.resizeSub = this.resizeEvent.subscribe((widget) => {
      if (widget === this.widget) { // or check id , type or whatever you have there
        // resize your widget, chart, map , etc.
        console.log(widget);
      }
    });

    this.subscriptions = this.http.get('http://localhost:3000/uptime',
      { responseType: 'text'}).subscribe((data: any) => {
      this.data = data;
      // console.log(data);
      this.cd.detectChanges();
    });
    this.refreshIntervalId = setInterval( () => {

      this.subscriptions = this.http.get('http://localhost:3000/uptime',
        { responseType: 'text'}).subscribe((data: any) => {
        this.data = data;
        // console.log(data);
        this.cd.detectChanges();
      });

    }, 1000);

  }

  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }
}
