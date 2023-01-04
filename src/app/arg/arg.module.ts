import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ArgComponent } from 'src/app/arg/components/arg.component';

const routes: Routes = [
  {
    path: 'arg',
    component: ArgComponent
  }
]

@NgModule({
  declarations: [ArgComponent],
  imports: [BrowserModule, RouterModule.forChild(routes) ],
  providers: [],
})
export class ArgModule {

}
