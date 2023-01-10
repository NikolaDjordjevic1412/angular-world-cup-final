import {Component, HostListener, OnInit} from '@angular/core';
import {from, fromEvent, merge, of, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {map, take} from 'rxjs/operators';
import {LoadCountriesService} from 'src/app/loader/services/loadCountries.service';
import {CountryService} from "../../logic/services/country.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})


export class LoaderComponent implements OnInit {
  loader$ = false;
  public innerWidth: any;
  public innerHeight: any;
  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;

  constructor(
    protected _svcCountry: CountryService,
    private loadCountriesService: LoadCountriesService,
    private router: Router,
    private database: AngularFireDatabase,
  ) {
    this.loadCountriesService.countriesArray$.subscribe(() => {
    })
  }

  #checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    )
      .pipe(map(() => navigator.onLine))
      .subscribe(status => {
        this.networkStatus = status;
      });
  }

  ngOnInit(): void {
    this.#checkNetworkStatus();
    if (this.networkStatus) {
      from(this._svcCountry.reset())
        .subscribe(numOfCountries => {
          setTimeout(() => {
            this.router.navigate(['home'])
          }, 2000)
        });
    }

    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

}
