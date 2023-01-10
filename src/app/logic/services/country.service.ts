import {lastValueFrom, Observable, take} from 'rxjs';
import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {Country} from "../types/country.entity";
import {map} from "rxjs/operators";

@Injectable()
export class CountryService {
  #dbCountry: AngularFireList<any>;

  constructor(
    protected _db: AngularFireDatabase
  ) {
    this.#dbCountry = _db.list('countries');
  }

  list(): Observable<Country[]> {
    return this.#dbCountry.snapshotChanges()
      .pipe(
        take(1),
        map(changes => changes.map(record => new Country(record.payload))),
      )
  }

  count(): Promise<number> {
    return lastValueFrom(this.list()).then(list => list.length);
  }

  async truncate(): Promise<void> {
    return this.#dbCountry.remove();
  }

  async initialize(countries = DEFAULTS): Promise<(string | null)[]> {
    return Promise.all(
      countries.map(country =>
        this.#dbCountry.set(country.id, country)
          .then(() => country.id)),
    );
  }

  async reset(force = false): Promise<number> {
    if (!force) {
      const actual = await this.count();
      if (0 < actual) {
        return actual;
      }
    }
    // Erase everything
    await this.truncate();
    // Initialize
    return this.initialize()
      .then(keys => keys.length);
  }
}

const DEFAULTS = [{
  id: "AR",
  name: "Argentina",
  logo: "afa.png",
  route: "ar",
}, {
  id: "FR",
  name: "France",
  logo: "fff.png",
  route: "fr",
}]
