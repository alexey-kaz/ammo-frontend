import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule, NbLayoutModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { ChartModule } from 'angular2-chartjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {DynamicWidgetsComponent} from './components/dynamicWidgets/dynamicWidgets.component';
import {ParentDynamicComponent} from './components/dynamicWidgets/parentDynamic.component';
import {GridsterModule} from 'angular-gridster2';
import {WidgetAComponent} from './components/dynamicWidgets/widgetA.component';
import {WidgetBComponent} from './components/dynamicWidgets/widgetB.component';
import {WidgetCComponent} from './components/dynamicWidgets/widgetC.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
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
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class ECommerceModule { }
