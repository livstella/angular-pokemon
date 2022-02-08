import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonSelectedComponent } from './pokemon-selected/pokemon-selected.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainersPage } from './trainers/trainers.page';
import { LoginPage } from './login/login.page';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonSelectedComponent,
    TrainersPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
