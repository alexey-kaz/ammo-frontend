import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbSelectModule,
  NbLayoutModule,
  NbSidebarModule,
  NbActionsModule, NbInputModule,
} from '@nebular/theme';
import { InfrastructureComponent } from './infrastructure.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    NbCardModule,
    NbSelectModule,
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbLayoutModule,
    NbInputModule,
    CommonModule,
  ],
  declarations: [
    InfrastructureComponent,
  ],
  bootstrap: [InfrastructureComponent],
})
export class InfrastructureModule { }
