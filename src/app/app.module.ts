import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CardscreenComponent } from './cardscreen/cardscreen.component';
// import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';

import { CoreModule } from './core/core.module';
import AuthComponent from './auth/auth.component';

@NgModule({
  declarations: [AppComponent, CardscreenComponent],


@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AuthModule,
    MaterialModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
