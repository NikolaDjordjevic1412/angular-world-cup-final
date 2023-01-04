import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/home/components/home.component';
import { HomeService } from 'src/app/home/services/home.service';
import { Routes , RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  }
]
@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, RouterModule.forChild(routes)],
  providers: [HomeService],
})
export class HomeModule {

}
