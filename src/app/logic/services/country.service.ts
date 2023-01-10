import {Observable, take , BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';
import {AngularFireDatabase , AngularFireList} from "@angular/fire/compat/database";
import {Country} from "../types/country.entity";
import {map} from "rxjs/operators";

@Injectable()
export class CountryService {
  countriesRef: AngularFireList<any>;

  constructor(
    protected _db: AngularFireDatabase
  ) {
    this.countriesRef = _db.list('countries');
  }

  list(): Observable<Country[]> {

    return this._db.list('/teams').snapshotChanges()
      .pipe(
        take(1),
        map(changes => {
          return changes.reduce((acc, record) => {
            try {
              acc.push(new Country(record.payload));
            } catch (ex) {
              // TODO@nik: Cleanup this once the database is fixed
              if ((ex as Error).message !== "Invalid") {
                throw ex;
              }
            }
            return acc;
          }, [] as (Country[]));
        }),
      )
  }

  truncate(): void {
    this.countriesRef.remove();
  }

  initialize(): void {
    this.countriesRef.push({
      argentina: {
        id: 'arg',
        ord: 0,
        log:'assets/img/afa.png'
      },
      france: {
        id: 'france',
        ord: 1,
        log:'assets/img/fff.png'
      },
    })
  }
}
