import {ChangeDetectionStrategy, Component, EventEmitter, Input, ViewEncapsulation} from '@angular/core';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';
import {UUID} from "angular2-uuid";

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
  constructor() {}
  public gridsterOptions: GridsterConfig = {
    draggable: {
      enabled: true,
      delayStart : 20,
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
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
  resizeEvent: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();
}
