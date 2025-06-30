import { Routes } from '@angular/router';
import { DashboardHome } from 'src/app/features/dashboard-home/dashboard-home';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardHome,
  },
];
