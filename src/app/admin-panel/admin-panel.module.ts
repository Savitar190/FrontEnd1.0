import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminPanelModule { }
