import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayerComponent } from './pages/player/player.component';
import {MatSliderModule} from '@angular/material/slider'
import {MatListModule} from '@angular/material/list'
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PagenotfoundComponent,
    PlayerComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatSliderModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
