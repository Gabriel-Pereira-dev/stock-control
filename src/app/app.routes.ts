import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { AuthGuard } from '@core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('@shared/dashboard/dashboard-module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
];
