import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from 'src/environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoaderModule} from 'src/app/loader/loader.module';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {HomeModule} from 'src/app/home/home.module';
import {ArgModule} from 'src/app/arg/arg.module';
import {FranceModule} from 'src/app/france/france.module';
import {LogicModule} from "./logic/logic.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoaderModule,
    LogicModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ArgModule,
    FranceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
