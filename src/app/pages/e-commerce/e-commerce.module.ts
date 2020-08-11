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
import { ECommerceComponent } from './e-commerce.component';
import { ChartModule } from 'angular2-chartjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {DynamicWidgetsComponent} from './components/dynamicWidgets/dynamicWidgets.component';
import {ParentDynamicComponent} from './components/dynamicWidgets/parentDynamic.component';
import {GridsterModule} from 'angular-gridster2';
import {WidgetAComponent} from './components/dynamicWidgets/widgetA.component';
import {WidgetBComponent} from './components/dynamicWidgets/widgetB.component';
import {WidgetCComponent} from './components/dynamicWidgets/widgetC.component';
import {WidgetDComponent} from "./components/dynamicWidgets/widgetD.component";

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
    ECommerceComponent,
    DynamicWidgetsComponent,
    ParentDynamicComponent,
    WidgetAComponent,
    WidgetBComponent,
    WidgetCComponent,
    WidgetDComponent,
  ],

providers: [
  ],
  entryComponents: [
  ],
})
export class ECommerceModule { }
