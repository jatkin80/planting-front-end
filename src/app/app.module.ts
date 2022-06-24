import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantListingComponent } from './plant-listing/plant-listing.component';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    PlantListingComponent,
    PlantFormComponent,
    NavBarComponent,
    WeatherWidgetComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
