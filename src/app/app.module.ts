import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingScreenComponent } from './component/landing-screen/landing-screen.component';
import { HotelListComponent } from './component/hotel-list/hotel-list.component';
import { RestaurantDetailsComponent } from './component/restaurant-details/restaurant-details.component';
import { CurrencyFormatPipe } from './shared/currency-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    HotelListComponent,
    RestaurantDetailsComponent,
    CurrencyFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
