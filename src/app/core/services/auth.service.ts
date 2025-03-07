import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';
import { USER_MOCK_DATA } from '../config/user-data.mock';
import { IS_LOGGED_IN } from '../config/global-const.helper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private userDataService = inject(UserDataService);
  public login(): void {
    localStorage.setItem(IS_LOGGED_IN, 'true');
    this.userDataService.userData.set(USER_MOCK_DATA);
    this.router.navigate(['app/cat-facts']);
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['app/login']);
  }
}
