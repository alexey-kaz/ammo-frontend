import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';



import {CompactType, GridsterConfig, GridsterItem, GridType} from 'ngx-gridster';

@Component({
  selector: 'nb-tabset-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './TabsetShowcaseComponent.component.html',
  styles: [`
    :host nb-tab {
      padding: 1.25rem;
    }
  `],
})

export class TabsetShowcaseComponents implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: TabsetShowcaseComponents.itemChange,
      itemResizeCallback: TabsetShowcaseComponents.itemResize,
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 3, rows: 2, y: 1, x: 4},
      {cols: 1, rows: 1, y: 4, x: 5},
      {cols: 1, rows: 1, y: 2, x: 1},
      {cols: 2, rows: 2, y: 5, x: 5},
      {cols: 2, rows: 2, y: 3, x: 2},
      {cols: 2, rows: 1, y: 2, x: 2},
      {cols: 1, rows: 1, y: 3, x: 4},
      {cols: 1, rows: 1, y: 0, x: 6}
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }
} 
/*static itemChange(item, itemComponent) {
  console.info('itemChanged', item, itemComponent);
}

static itemResize(item, itemComponent) {
  console.info('itemResized', item, itemComponent);
}

ngOnInit() {
  this.options = {
    itemChangeCallback: AppComponent.itemChange,
    itemResizeCallback: AppComponent.itemResize,
  };

  this.dashboard = [
    {cols: 2, rows: 1, y: 0, x: 0},
    {cols: 2, rows: 2, y: 0, x: 2}
  ];
}

changedOptions() {
  this.options.api.optionsChanged();
}

removeItem(item) {
  this.dashboard.splice(this.dashboard.indexOf(item), 1);
}

addItem() {
  this.dashboard.push({});
}

/*export class TabsetShowcaseComponents {
} */