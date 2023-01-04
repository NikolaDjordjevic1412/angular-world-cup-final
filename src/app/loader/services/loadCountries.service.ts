import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoadCountriesInterface } from 'src/app/loader/types/loadCountries.interface';

@Injectable()
export class LoadCountriesService {
  countriesArray$ = new BehaviorSubject<LoadCountriesInterface[]>([]);

  addCountry( src: any, index: number, route: string ): void {
    let makeSortedArray = [...this.countriesArray$.value , { src: src , index: index , route: route }].sort((a: any,b: any) => a.index - b.index);
    this.countriesArray$.next(makeSortedArray);
  }

}
