import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FranceComponent } from 'src/app/france/components/france.component';

const routes: Routes = [
  {
    path: 'fra',
    component: FranceComponent
  }
]

@NgModule({
  declarations: [FranceComponent],
  imports: [BrowserModule, RouterModule.forChild(routes) ],
  providers: [],
})
export class FranceModule {

}
