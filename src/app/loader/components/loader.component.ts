import {Component, HostListener , OnInit} from '@angular/core';
import {fromEvent, merge, of, Subscription} from 'rxjs';
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

  checkNetworkStatus() {
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
    this._svcCountry.truncate();
    this._svcCountry.initialize();

    setTimeout(() => {
      this.checkNetworkStatus();
      if (this.networkStatus) {
        
        this.database.list('/countries').valueChanges().subscribe(([value]) => {
          const {argentina , france} = value as any;
          console.log(argentina , france , 'snap')
          this.loadCountriesService.addCountry(argentina['log'], argentina['ord'], argentina['id'])
          this.loadCountriesService.addCountry(france['log'], france['ord'], france['id'])
          if (value != null) {
            this.loader$ = true;
            this.router.navigate(['home'])
          } else {
            this.loader$ = false;
          }
        })
      }
    }, 2000)

    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

}
