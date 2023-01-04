import { Component , HostListener } from '@angular/core';
// import { GlobalService } from 'src/app/globalService/services/global.service';
import { Observable , Subscription , merge, of , fromEvent} from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireDatabase  } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { LoadCountriesService } from 'src/app/loader/services/loadCountries.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})


export class LoaderComponent {
  loader$ = false;
  public innerWidth: any;
  public innerHeight: any;
  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;

  constructor( private loadCountriesService: LoadCountriesService , private router: Router , private database: AngularFireDatabase ) {
    this.loadCountriesService.countriesArray$.subscribe((countriesArray)=>{

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
    setTimeout(() => {
      this.checkNetworkStatus();
      if(this.networkStatus){
        this.database.list('/teams').snapshotChanges().subscribe((snapshot)=>{
          snapshot.forEach((childSnapshot ) =>{
            let countryObj: any = childSnapshot.payload.val();
            this.loadCountriesService.addCountry('assets/img/' + countryObj['src']  , countryObj['index'] , countryObj['route'])
          });
          if(snapshot != null){
            this.loader$ = true;
            this.router.navigate(['home'])
          }
          else{
            this.loader$ = false;
          }
        })
      }
    } , 2000)

    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

}
