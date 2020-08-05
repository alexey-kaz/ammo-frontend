import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';

import {GridsterConfig, GridsterItem} from 'angular-gridster2';
import {DynamicWidgetsService} from '../../services/dynamic-widgets.service';

@Component({
  selector: 'app-dynamic-widgets',
  templateUrl: './dynamicWidgets.component.html',
  styleUrls: ['./dynamicWidgets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class DynamicWidgetsComponent implements OnInit {
  resizeEvent: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();
  constructor(public dynamicWidgetsService: DynamicWidgetsService) {
  }
  get options(): GridsterConfig {
    return this.dynamicWidgetsService.options;
  }
  get dashboard(): GridsterItem[] {
    return this.dynamicWidgetsService.dashboard;
  }
  ngOnInit(): void {}
}
