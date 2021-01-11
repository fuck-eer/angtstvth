import { CartService } from './Shared/Services/Cartservice.service';
import {  HttpClientModule } from '@angular/common/http';
import { AuthService } from './Shared/Services/authservice.service';
import { CardsignComponent } from './logindisp/cardsign/cardsign.component';
import { CardlogComponent } from './logindisp/cardlog/cardlog.component';
import { LogindispComponent } from './logindisp/logindisp.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CartsecComponent } from './cartsec/cartsec.component';

@NgModule({
  declarations: [
    AppComponent,
    LogindispComponent,
    CardlogComponent,
    CardsignComponent,
    CartsecComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
