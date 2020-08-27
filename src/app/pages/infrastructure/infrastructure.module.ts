import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbSelectModule,
  NbLayoutModule,
  NbSidebarModule,
  NbActionsModule, NbInputModule, NbFormFieldModule, NbIconModule, NbButtonModule,
} from '@nebular/theme';
import { InfrastructureComponent } from './infrastructure.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserTableComponent} from "./user-table/user-table.component";

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
    ReactiveFormsModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
  ],
  declarations: [
    UserTableComponent,
    InfrastructureComponent,
  ],
  bootstrap: [InfrastructureComponent],
})
export class InfrastructureModule { }
