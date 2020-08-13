import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule, NbLayoutModule, NbTabsetModule,
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
import {HttpClientModule} from "@angular/common/http";
import {TabService} from "./tab.service";
import {TabContentComponent} from "./tab-content.component";
import {ContentContainerDirective} from "./content-container.directive";
import {MatTabsModule} from "@angular/material/tabs";

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
    NbTabsetModule,
    HttpClientModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NbLayoutModule,
    GridsterModule,
    NbIconModule,
    NbCardModule,
    GridsterModule,
    NbIconModule,
    MatTabsModule,
  ],
  declarations: [
    MainPageComponent,
    TabContentComponent,
    ContentContainerDirective,
    DynamicWidgetsComponent,
    ParentDynamicComponent,
    LogWidgetComponent,
    CPUWidgetComponent,
    RAMWidgetComponent,
    UptimeWidgetComponent,
  ],

providers: [ TabService ],
  bootstrap: [MainPageComponent],
  entryComponents: [DynamicWidgetsComponent],
})
export class MainPageModule { }
