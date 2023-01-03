import { Component , HostListener } from '@angular/core';
// import { GlobalService } from 'src/app/globalService/services/global.service';
// import { Observable , Subscription , merge, of , fromEvent} from 'rxjs';
// import { Router } from '@angular/router';
// import { AngularFirestore  } from '@angular/fire/compat/firestore';
// import { AngularFireDatabase  } from '@angular/fire/compat/database';
// import { map } from 'rxjs/operators';
// import { HomeService } from 'src/app/home/services/home.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})


export class LoaderComponent {
  // loader$ = false;
  public innerWidth: any;
  public innerHeight: any;
  // networkStatus: boolean = false;
  // networkStatus$: Subscription = Subscription.EMPTY;
  //
  // constructor( private homeService: HomeService, private globalService: GlobalService , private router: Router , private store: AngularFirestore , private database: AngularFireDatabase ) {
  //   this.globalService.loader$.subscribe((loader)=>{
  //     this.loader$=  loader.loaded;
  //   })
  //
  // }
  // checkNetworkStatus() {
  //   this.networkStatus = navigator.onLine;
  //   this.networkStatus$ = merge(
  //     of(null),
  //     fromEvent(window, 'online'),
  //     fromEvent(window, 'offline')
  //   )
  //   .pipe(map(() => navigator.onLine))
  //   .subscribe(status => {
  //     console.log('status', status);
  //     this.networkStatus = status;
  //   });
  // }
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.checkNetworkStatus();
    //   if(this.networkStatus){
    //     this.database.list('/teams').snapshotChanges().subscribe((snapshot)=>{
    //       snapshot.forEach((childSnapshot ) =>{
    //         let countryObj: any = childSnapshot.payload.val();
    //         this.homeService.addCountry('assets/img/' + countryObj['src']  , countryObj['index'] , countryObj['route'])
    //       });
    //       if(snapshot != null){
    //         this.loader$ = true;
    //         console.log('+')
    //         this.router.navigate(['home'])
    //
    //       }
    //       else{
    //         this.loader$ = false;
    //         console.log('-')
    //       }
    //     })
    //   }
    // } , 2000)
    //
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    // this.globalService.getData().subscribe((response)=> {
    //   if(response != null){
    //     this.loader$ = true;
    //     console.log('+')
    //     this.router.navigate(['home'])
    //
    //   }
    //   else{
    //     this.loader$ = false;
    //     console.log('-')
    //   }
    // });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

}
