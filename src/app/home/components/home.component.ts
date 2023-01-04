import { Component , HostListener } from '@angular/core';
import { LoadCountriesService } from 'src/app/loader/services/loadCountries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todosValue$: string = '';
  imageArray$: any;
  public innerWidth: any;
  public innerHeight: any;

  constructor( private loadCountriesService: LoadCountriesService ) {
    this.loadCountriesService.countriesArray$.subscribe((imgs)=>{
      this.imageArray$=  imgs;
    })
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }
}
