import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { LoginBuilder } from '../config/login-form.builder';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private authService = inject(AuthService);
  protected loginForm = LoginBuilder.build();
  protected formSubmitted = signal<boolean>(false);

  protected login(): void {
    this.loginForm.updateValueAndValidity();
    this.formSubmitted.set(true);
    if (this.loginForm.valid) {
      this.authService.login();
    }
  }
}
