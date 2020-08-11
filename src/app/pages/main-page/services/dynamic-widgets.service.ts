import { Injectable } from '@angular/core';
import {UUID} from 'angular2-uuid';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';

@Injectable({
  providedIn: 'root',
})
export class DynamicWidgetsService {
  public options: GridsterConfig = {
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
  public dashboard: GridsterItem[] = [];
  constructor() { }
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
  deleteItem(id: string): void {
    const item = this.dashboard.find(d => d.id === id);
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
    console.log('item deleted');
  }
}
