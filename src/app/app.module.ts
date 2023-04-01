import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './admin-panel/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
