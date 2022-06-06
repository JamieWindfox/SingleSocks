import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DonateComponent} from "./donate/donate.component";
import {FindSocksComponent} from "./find-socks/find-socks.component";
import {CreateSocksComponent} from "./create-socks/create-socks.component";
import {SockProfileComponent} from "./sock-profile/sock-profile.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {DiyCornerComponent} from "./diy-corner/diy-corner.component";
import {RegisterUserComponent} from "./register-user/register-user.component";
import {RoutePath} from "./SingleSockLink";
import {LoginUserComponent} from "./login-user/login-user.component";

const routes: Routes = [
  {path: RoutePath.HOME, component: HomeComponent},
  {path: RoutePath.FIND, component: FindSocksComponent},
  {path: RoutePath.DONATE, component: DonateComponent},
  {path: RoutePath.DIY, component: DiyCornerComponent},
  {path: 'create', component: CreateSocksComponent}, // TODO
  {path: RoutePath.LOGIN, component: LoginUserComponent},
  {path: RoutePath.REGISTER, component: RegisterUserComponent},
  {path: 'sock/:id', component: SockProfileComponent}, // TODO
  {path: 'user/:id', component: UserProfileComponent}, // TODO,
  {path: '', redirectTo: RoutePath.HOME, pathMatch: 'full'}
  // TODO "Give away socks"
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
