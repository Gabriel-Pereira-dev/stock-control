import { Component, inject } from '@angular/core';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    RippleModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  //Injects
  private readonly formBuilder = inject(FormBuilder);

  //Properties
  showLoginCard = true;
  loginForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });
  signupForm = this.formBuilder.group({
    name: ['', Validators.required, Validators.minLength(8)],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  //Methods
  alternateShowLoginCard() {
    this.showLoginCard = !this.showLoginCard;
  }

  onSubmitLoginForm(): void {
    console.log(this.loginForm.value);
  }

  onSubmitSignupForm(): void {
    console.log(this.signupForm.value);
  }
}
