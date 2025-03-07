import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { IS_LOGGED_IN } from './global-const.helper';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(): boolean {
    const loggedIn = localStorage.getItem(IS_LOGGED_IN);
    if (!loggedIn) {
      this.authService.logout();
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
