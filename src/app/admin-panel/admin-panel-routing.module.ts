import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {path: '', redirectTo: 'admin/panel', pathMatch: 'full'},
  {path: '', component: AdminPanelComponent, children: [

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
