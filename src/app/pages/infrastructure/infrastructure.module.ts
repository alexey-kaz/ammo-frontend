import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbSelectModule,
  NbLayoutModule,
  NbSidebarModule,
  NbActionsModule,
} from '@nebular/theme';
import { InfrastructureComponent } from './infrastructure.component';

@NgModule({
  imports: [
    NbCardModule,
    NbSelectModule,
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
  ],
  bootstrap: [InfrastructureComponent],
})
export class InfrastructureModule { }
