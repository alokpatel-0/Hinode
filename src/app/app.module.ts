import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardscreenComponent } from './cardscreen/cardscreen.component';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './card/card.component';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';

import { CoreModule } from './core/core.module';
import AuthComponent from './auth/auth.component';

@NgModule({
  declarations: [AppComponent, CardComponent, CardscreenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    MaterialModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
