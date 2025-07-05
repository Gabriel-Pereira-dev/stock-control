import { DialogService } from 'primeng/dynamicdialog';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { SharedImports } from '@shared/shared-imports';

export const DashboardImports = {
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //PrimeNG
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    ToastModule,
    ChartModule,

    ...SharedImports, // your other shared components/modules
  ],
  providers: [CurrencyPipe, DialogService],
};
