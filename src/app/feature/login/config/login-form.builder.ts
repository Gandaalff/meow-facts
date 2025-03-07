import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginForm } from './login-form.interface';

export class LoginBuilder {
  static build(): FormGroup<LoginForm> {
    return new FormGroup<LoginForm>({
      loginName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
}
