import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-cat-facts-card',
  templateUrl: './cat-facts-card.component.html',
  styleUrls: ['./cat-facts-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatFactsCardComponent {
  public catFact = input.required();
}
