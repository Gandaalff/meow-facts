import { inject, Injectable } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { USER_MOCK_DATA } from '../config/user-data.mock';
import { Router } from '@angular/router';
import { IS_LOGGED_IN } from '../config/global-const.helper';

export const userHandleConfig =
  (userHandleService: UserHandleService) => () => {
    return userHandleService.checkIfUserExist();
  };

@Injectable({
  providedIn: 'root',
})
export class UserHandleService {
  private userDataService = inject(UserDataService);
  private router = inject(Router);

  public checkIfUserExist(): void {
    const userData = this.userDataService.userData();
    const loggedIn = localStorage.getItem(IS_LOGGED_IN);

    if (loggedIn) {
      if (!userData) {
        this.userDataService.userData.set(USER_MOCK_DATA);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}
