import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly primeng = inject(PrimeNG);
  protected title = 'stock-control';

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
