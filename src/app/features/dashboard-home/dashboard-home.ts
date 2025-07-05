import { Component } from '@angular/core';
import { DashboardImports } from '@shared/dashboard/dashboard-imports';

@Component({
  standalone: true,
  selector: 'app-dashboard-home',
  imports: [DashboardImports.imports],
  templateUrl: './dashboard-home.html',
  providers: [DashboardImports.providers],
})
export class DashboardHome {}
