import { NgModule } from '@angular/core';
import { LoaderComponent } from 'src/app/loader/components/loader.component';
import { GlobalService } from 'src/app/globalService/services/global.service';
import { Routes , RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: LoaderComponent
  }
]

@NgModule({
  declarations: [LoaderComponent],
  imports: [BrowserModule, RouterModule.forChild(routes) ],
  providers: [GlobalService],
})
export class LoaderModule {

}
