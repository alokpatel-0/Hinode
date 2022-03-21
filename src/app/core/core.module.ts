import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material.module';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent, LoaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, LoaderComponent],
})
export class CoreModule {}
