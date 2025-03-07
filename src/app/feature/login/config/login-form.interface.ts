import { FormControl } from '@angular/forms';

export interface LoginForm {
  loginName: FormControl<string | null>;
  password: FormControl<string | null>;
}
