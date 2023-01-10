import { NgModule } from '@angular/core';
import { LoaderComponent } from 'src/app/loader/components/loader.component';
import { LoadCountriesService } from 'src/app/loader/services/loadCountries.service';
import { Routes , RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {CountryService} from "src/app/logic/services/country.service";

const routes: Routes = [
  {
    path: '',
    component: LoaderComponent
  }
]
@NgModule({
  declarations: [LoaderComponent],
  imports: [BrowserModule, RouterModule.forChild(routes) ],
  providers: [CountryService , LoadCountriesService],
})
export class LoaderModule {

}
