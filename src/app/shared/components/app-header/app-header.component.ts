import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { BUTTON_TYPES } from '../../config/button-types.helper';
import { AuthService } from '../../../core/services/auth.service';
import { UserDataService } from '../../../core/services/user-data.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
})
export class AppHeaderComponent {
  protected userDataService = inject(UserDataService);
  private authService = inject(AuthService);
  protected buttonTypes = BUTTON_TYPES;

  protected logout(): void {
    this.authService.logout();
  }
}
