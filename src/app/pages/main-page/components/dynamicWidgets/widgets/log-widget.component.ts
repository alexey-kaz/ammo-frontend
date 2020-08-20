import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import {Subscription} from 'rxjs';
import {GridsterItem} from 'angular-gridster2';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-widget-log',
  template: `
    <nb-card size=giant>
      <nb-card-body style='background-color: black; color: white; font-family: Arial, Helvetica, sans-serif;
       font-size: 24px;' [innerText]='data'>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class LogWidgetComponent implements OnInit, OnDestroy {
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
    this.subscriptions = this.http.get('http://localhost:3000/loglistener',
      { responseType: 'text'}).subscribe((data: any) => {
      this.data = data;
      // console.log(data);
      this.cd.detectChanges();
    });
    this.refreshIntervalId = setInterval( () => {
      this.change_sub = this.http.get('http://localhost:3000/change',
        { responseType: 'text'}).subscribe((data: any) => {
        this.change = JSON.parse(data);
        // console.log(this.change);
      });
      if (this.change === true) {
        this.subscriptions = this.http.get('http://localhost:3000/data',
          { responseType: 'text'}).subscribe((data: any) => {
          this.data = data;
          // console.log(data);
          this.cd.detectChanges();
        });
      }
    }, 1000);

  }

  ngOnDestroy(): void {
    clearInterval(this.refreshIntervalId);
    this.delete_sub = this.http.get('http://localhost:3000/delete', { responseType: 'text'}).subscribe((data: any) => {
      this.change = JSON.parse(data);
      // console.log(this.change);
    });
    // console.log('log delete');
    this.resizeSub.unsubscribe();
    this.subscriptions.unsubscribe();
  }
}



