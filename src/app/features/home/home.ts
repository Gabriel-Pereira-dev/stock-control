import { Component, inject } from '@angular/core';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '@core/services/user/user';

import { CookieService } from 'ngx-cookie-service';
import { AuthRequest } from '@models/interfaces/auth/AuthRequest';
import { SignupUserRequest } from '@models/interfaces/SignupUserRequest';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

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
  private readonly userService = inject(User);
  private readonly cookieService = inject(CookieService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  //Properties
  showLoginCard = true;
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  signupForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  //Methods
  alternateShowLoginCard() {
    this.showLoginCard = !this.showLoginCard;
    this.loginForm.reset();
    this.signupForm.reset();
  }

  get email() {
    return this.showLoginCard ? this.loginForm.get('email') : this.signupForm.get('email');
  }

  get password() {
    return this.showLoginCard ? this.loginForm.get('password') : this.signupForm.get('password');
  }

  get name() {
    return this.signupForm.get('name');
  }

  getFormError(controlName: string): string {
    const control = this.showLoginCard
      ? this.loginForm.get(controlName)
      : this.signupForm.get(controlName);
    if (!control?.errors) return '';

    if (control.errors['required']) return 'Campo obrigatório.';
    if (control.errors['email']) return 'Formato de email inválido.';
    if (control.errors['minlength']) {
      const required = control.errors['minlength'].requiredLength;
      return `Mínimo ${required} caracteres.`;
    }

    return 'Campo inválido.';
  }

  onSubmitLoginForm(): void {
    if (this.loginForm.value && this.loginForm.valid) {
      this.userService.authUser(this.loginForm.value as AuthRequest).subscribe({
        next: (response) => {
          if (response) {
            this.cookieService.set('USER_INFO', response?.token);

            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: `Bem vindo de volta ${response.name}!`,
            });
            this.loginForm.reset();
            this.router.navigate(['/dashboard']);
          }
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao fazer o login!',
          });
          console.error('Login failed!!!', error);
        },
      });
    }
  }

  onSubmitSignupForm(): void {
    if (this.signupForm.value && this.signupForm.valid) {
      this.userService.signupUser(this.signupForm.value as SignupUserRequest).subscribe({
        next: (response) => {
          if (response) {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Usuário criado com sucesso!',
            });
            this.signupForm.reset();
            this.showLoginCard = true;
          }
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao criar usuário!',
          });
          console.error('Signup failed!!!', error);
        },
      });
    }
  }
}
