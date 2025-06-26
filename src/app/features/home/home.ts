import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardModule, InputTextModule, ButtonModule, ToastModule, RippleModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  showLoginCard = true;

  alternateShowLoginCard() {
    this.showLoginCard = !this.showLoginCard;
  }
}
