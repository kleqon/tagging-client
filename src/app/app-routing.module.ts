import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  UserMainpageComponent} from 'src/app/user-mainpage/user-mainpage.component'
import {LoginPageComponent } from 'src/app/login-page/login-page.component'
import {PagenotfoundComponent} from 'src/app/pagenotfound/pagenotfound.component'

const routes: Routes = [
  {path: 'login', component:LoginPageComponent},
  {path: 'usermainpage', component:UserMainpageComponent}   ,
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[UserMainpageComponent,LoginPageComponent]