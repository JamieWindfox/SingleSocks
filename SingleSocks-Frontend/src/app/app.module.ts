import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {CreateSocksComponent} from './create-socks/create-socks.component';
import {GameComponent} from './game/game.component';
import {AboutComponent} from './about/about.component';
import {DiyCornerComponent} from './diy-corner/diy-corner.component';
import {DonateComponent} from './donate/donate.component';
import {FindSocksComponent} from './find-socks/find-socks.component';
import {SockProfileComponent} from './sock-profile/sock-profile.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {LoginUserComponent} from './login-user/login-user.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateSocksComponent,
    GameComponent,
    AboutComponent,
    DiyCornerComponent,
    DonateComponent,
    FindSocksComponent,
    SockProfileComponent,
    UserProfileComponent,
    RegisterUserComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
