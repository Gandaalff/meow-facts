import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { BUTTON_TYPES } from '../../config/button-types.helper';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public buttonLabel = input.required();
  public buttonType = input<BUTTON_TYPES>(BUTTON_TYPES.PRIMARY);
  public click = output<void>();
  protected buttonTypes = BUTTON_TYPES;
}
