import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule, NbLayoutModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MainPageComponent } from './main-page.component';
import { ChartModule } from 'angular2-chartjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {DynamicWidgetsComponent} from './components/dynamicWidgets/dynamicWidgets.component';
import {ParentDynamicComponent} from './components/dynamicWidgets/parentDynamic.component';
import {GridsterModule} from 'angular-gridster2';
import {LogWidgetComponent} from './components/dynamicWidgets/widgets/log-widget.component';
import {CPUWidgetComponent} from './components/dynamicWidgets/widgets/cpu-widget.component';
import {RAMWidgetComponent} from './components/dynamicWidgets/widgets/ram-widget.component';
import {UptimeWidgetComponent} from './components/dynamicWidgets/widgets/uptime-widget.component';

@NgModule({
  imports: [
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    NbLayoutModule,
    GridsterModule,
    NbIconModule,
  ],
  declarations: [
    MainPageComponent,
    DynamicWidgetsComponent,
    ParentDynamicComponent,
    LogWidgetComponent,
    CPUWidgetComponent,
    RAMWidgetComponent,
    UptimeWidgetComponent,
  ],

providers: [
  ],
  entryComponents: [
  ],
})
export class MainPageModule { }
