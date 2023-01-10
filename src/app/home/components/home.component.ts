import {Component, OnDestroy, OnInit} from '@angular/core';
import {CountryService} from "../../logic/services/country.service";
import {Subject, takeUntil} from "rxjs";
import {Country} from "../../logic/types/country.entity";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _onDestroy = new Subject<void>();

  homeTeam: Country | undefined;
  guestTeam: Country | undefined;

  constructor(
    protected _svcCountry: CountryService,
  ) {

  }

  ngOnInit(): void {

    this._svcCountry.list().pipe(
      takeUntil(this._onDestroy),
    ).subscribe(([homeTeam, guestTeam]: Country[]) => {
      this.homeTeam = homeTeam;
      this.guestTeam = guestTeam;
    });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}
