import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateSocksComponent } from './create-socks/create-socks.component';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { DiyCornerComponent } from './diy-corner/diy-corner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateSocksComponent,
    GameComponent,
    AboutComponent,
    DiyCornerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
