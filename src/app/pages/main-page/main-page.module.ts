import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbIconModule,
  NbListModule,
  NbLayoutModule,
  NbTabsetModule,
  NbCardModule,
} from '@nebular/theme';
import { MainPageComponent } from './main-page.component';
import {DynamicWidgetsComponent} from './components/dynamicWidgets/dynamicWidgets.component';
import {ParentDynamicComponent} from './components/dynamicWidgets/parentDynamic.component';
import {GridsterModule} from 'angular-gridster2';
import {LogWidgetComponent} from './components/dynamicWidgets/widgets/log-widget.component';
import {CPUWidgetComponent} from './components/dynamicWidgets/widgets/cpu-widget.component';
import {RAMWidgetComponent} from './components/dynamicWidgets/widgets/ram-widget.component';
import {UptimeWidgetComponent} from './components/dynamicWidgets/widgets/uptime-widget.component';
import {HttpClientModule} from "@angular/common/http";
import {TabContentComponent} from "./tab-content.component";
import {ContentContainerDirective} from "./content-container.directive";
import { ZabbixWidgetComponent } from './components/dynamicWidgets/widgets/zabbix-widget.component';
import {ThemeModule} from "../../@theme/theme.module";

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    GridsterModule,
    NbIconModule,
    NbTabsetModule,
    HttpClientModule,
    NbButtonModule,
    NbListModule,
    NbLayoutModule,
    GridsterModule,
    NbIconModule,
    GridsterModule,
    NbIconModule,
    ThemeModule,
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
    ZabbixWidgetComponent,
  ],

providers: [],
  bootstrap: [MainPageComponent],
  entryComponents: [DynamicWidgetsComponent],
})
export class MainPageModule { }
