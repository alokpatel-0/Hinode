import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material.module';
import { LoaderComponent } from './loader/loader.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent, LandingComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [HeaderComponent, LoaderComponent, LandingComponent],
})
export class CoreModule {}
