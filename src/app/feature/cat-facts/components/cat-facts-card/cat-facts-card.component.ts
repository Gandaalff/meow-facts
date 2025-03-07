import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { CatFactsService } from '../../services/cat-facts.service';

@Component({
  selector: 'app-cat-facts-card',
  templateUrl: './cat-facts-card.component.html',
  styleUrls: ['./cat-facts-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatFactsCardComponent {
  public catFact = input.required();
}
