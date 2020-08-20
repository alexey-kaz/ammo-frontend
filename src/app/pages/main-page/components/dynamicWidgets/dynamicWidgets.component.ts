import {ChangeDetectionStrategy, Component, EventEmitter, Input, ViewEncapsulation} from '@angular/core';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';
import {UUID} from "angular2-uuid";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dynamic-widgets',
  templateUrl: './dynamicWidgets.component.html',
  styleUrls: ['./dynamicWidgets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class DynamicWidgetsComponent {
  @Input() test;
  public dashboard: GridsterItem[] = [];
  resizeEvent: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();
  constructor(private http: HttpClient) {}
  public gridsterOptions: GridsterConfig = {
    draggable: {
      enabled: true,
      delayStart : 50,
    },
    pushItems: true,
    resizable: {
      enabled: true,
    },
    displayGrid: 'always',
  };
  addWidgetLog(): void {
    this.dashboard.push({
      type: 'widgetLog',
      cols: 2,
      id: UUID.UUID(),
      rows: 2,
      x: 0,
      y: 0,
    });
    console.log(this.dashboard);
    this.postDash();
  }
  addWidgetCPU(): void {
    this.dashboard.push({
      type: 'widgetCPU',
      cols: 2,
      id: UUID.UUID(),
      rows: 2,
      x: 0,
      y: 0,
    });
    console.log(this.dashboard);
    this.postDash();
  }
  addWidgetRAM(): void {
    this.dashboard.push({
      type: 'widgetRAM',
      cols: 2,
      id: UUID.UUID(),
      rows: 2,
      x: 0,
      y: 0,
    });
    console.log(this.dashboard);
    this.postDash();
  }
  addWidgetUptime(): void {
    this.dashboard.push({
      type: 'widgetUptime',
      cols: 2,
      id: UUID.UUID(),
      rows: 2,
      x: 0,
      y: 0,
    });
    console.log(this.dashboard);
    this.postDash();
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
    this.postDash();
  }

  emptyDashboard() {
    this.dashboard = [];
  }

  postDash() {
    const url = `http://localhost:3000/post_dash${this.test}`;
    this.http.post(url, this.dashboard).subscribe(data => {
      console.log(data);
    });
    console.log('postdash');
  }

  getDash() {
    console.log('getdash');
    console.log(this.test);
    const url = (`http://localhost:3000/get_dash${this.test}`);
    this.http.get(url, { responseType: 'text'}).subscribe((data: any) => {
      this.dashboard = JSON.parse(data);
      console.log(this.dashboard);
    });
    this.dashboard.push({cols: 0, rows: 0, x: 0, y: 0});
    this.dashboard.splice(this.dashboard.length, 1);
    console.log(this.dashboard);
  }
}
