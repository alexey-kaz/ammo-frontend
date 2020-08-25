import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit, ChangeDetectorRef,
} from '@angular/core';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';
import {UUID} from "angular2-uuid";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dynamic-widgets',
  templateUrl: './dynamicWidgets.component.html',
  styleUrls: ['./dynamicWidgets.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})

export class DynamicWidgetsComponent implements OnInit {
  @Input() tab_number;
  public dashboard: GridsterItem[] = [];
  resizeEvent: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getDash();
  }

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
  addWidgetZabbix(): void {
    this.dashboard.push({
      type: 'widgetZabbix',
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
    const url = `http://localhost:3000/post_dash${this.tab_number}`;
    this.http.post(url, this.dashboard).subscribe(data => {
      console.log(data);
    });
    console.log('postdash');
  }

  getDash() {
    console.log('getdash' + this.tab_number);
    console.log(this.tab_number);
    const url = (`http://localhost:3000/get_dash${this.tab_number}`);
    this.http.get(url, { responseType: 'text'}).subscribe((data: any) => {
      this.dashboard = JSON.parse(data);
      console.log(this.dashboard);
      this.cd.detectChanges();
    });
  }
}
