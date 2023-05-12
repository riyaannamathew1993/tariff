import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TariffResultComponent } from './components/tariff-result/tariff-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleSortComponent } from './components/toggle-sort/toggle-sort.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TariffResultComponent,
    ToggleSortComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
