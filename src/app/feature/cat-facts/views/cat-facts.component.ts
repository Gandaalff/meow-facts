import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CatFactsCardComponent } from '../components/cat-facts-card/cat-facts-card.component';
import { CatFactsService } from '../services/cat-facts.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss'],
  imports: [CatFactsCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CatFactsComponent implements OnInit {
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      window.innerHeight;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    if (pos === max) {
      this.loadNewCatFact();
    }
  }

  private catFactsService = inject(CatFactsService);
  protected catFactsData = signal<string[]>([]);
  protected showErrorNotification = signal(false);
  protected loadingData = signal(false);

  ngOnInit(): void {
    this.loadBasicCatFacts();
  }

  private loadBasicCatFacts(): void {
    this.catFactsService.getCatFacts(false).subscribe((catFacts) => {
      this.catFactsData.set(catFacts);
    });
  }
  private loadNewCatFact(): void {
    this.loadingData.set(true);
    this.showErrorNotification.set(false);
    this.catFactsService.getNewCatFact(this.catFactsData()!).subscribe({
      next: (catFact) => {
        let catFacts = this.catFactsData()!;
        catFacts.push(catFact[0]);
        this.loadingData.set(false);
        this.catFactsData.set(catFacts);
      },
      error: () => {
        this.loadingData.set(false);
        this.showErrorNotification.set(true);
      },
    });
  }
}
