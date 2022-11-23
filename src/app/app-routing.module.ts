import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthRedirectGuard} from "./core/guards/auth-redirect.guard";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthRedirectGuard],
    children: []
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule]
})
export class AppRoutingModule { }
