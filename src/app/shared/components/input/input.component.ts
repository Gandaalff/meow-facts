import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  public controlContainer = inject(ControlContainer);
  public label = input<string>();
  public placeholder = input<string>();
  public controlName = input.required<string>();
  public type = input<string>('text');
  public showErrorMessage = input<boolean>(false);
  public errorMessage = input<string>();
}
