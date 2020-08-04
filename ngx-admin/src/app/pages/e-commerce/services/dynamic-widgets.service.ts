import { Injectable } from '@angular/core';
import {UUID} from 'angular2-uuid';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';

@Injectable({
  providedIn: 'root'
})
export class DynamicWidgetsService {
  public options: GridsterConfig = {
    draggable: {
      enabled: true,
      delayStart : 20,
    },
    pushItems: true,
    resizable: {
      enabled: true
    },
    displayGrid: 'always',
  };
  public dashboard: GridsterItem[] = [];
  constructor() { }
  addwidgetA(): void {
    this.dashboard.push({
      type: 'widgetA',
      cols: 2,
      id: UUID.UUID(),
      rows: 2,
      x: 0,
      y: 0
    });
  }
  addwidgetB(): void {
    this.dashboard.push({
      type: 'widgetB',
      cols: 2,
      id: UUID.UUID(),
      rows: 2,
      x: 0,
      y: 0
    });
  }
  addwidgetC(): void {
    this.dashboard.push({
      type: 'widgetC',
      cols: 2,
      id: UUID.UUID(),
      rows: 2,
      x: 0,
      y: 0
    });
  }
  deleteItem(id: string): void {
    const item = this.dashboard.find(d => d.id === id);
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
    console.log('item deleted')
  }
}
