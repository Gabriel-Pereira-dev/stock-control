import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from '@core/services/user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // Injects
  private readonly userService = inject(User);
  private readonly router = inject(Router);

  //Methods
  canActivate() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
