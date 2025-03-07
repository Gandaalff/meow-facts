import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { distinctUntilChanged, map, Observable, retry, tap, timer } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CatFacts } from '../config/cat-facts.interface';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  protected http = inject(HttpClient);

  public getCatFacts(isNewCatFact = true): Observable<string[]> {
    let ulrToGetStartValue = '';
    if (!isNewCatFact) {
      ulrToGetStartValue = '?count=8';
    }
    return this.http
      .get<CatFacts>(`${environment.url}${ulrToGetStartValue}`)
      .pipe(map((response) => response.data));
  }

  public getNewCatFact(catFactsData: string[]): Observable<string[]> {
    return this.getCatFacts().pipe(
      tap((response) => {
        if (catFactsData.includes(response[0])) {
          throw new Error();
        }
      }),
      distinctUntilChanged(),
      retry({
        count: 20,
        delay: () => {
          return timer(500);
        },
      })
    );
  }
}
