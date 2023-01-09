import {Observable, take} from 'rxjs';
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Country} from "../types/country.entity";
import {map} from "rxjs/operators";

@Injectable()
export class CountryService {

  constructor(
    protected _db: AngularFireDatabase
  ) {
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

}
