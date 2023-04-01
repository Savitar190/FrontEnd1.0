import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'admin/panel', pathMatch:'full'},
  {path: 'admin/panel', loadChildren: () => import('../app/admin-panel/admin-panel.module').then(x => x.AdminPanelModule)},
  {path: 'admin/auth', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
