import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,  //Aqui es donde importamos los modulos, con esto podemos utilizar Componentes del modulo
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
