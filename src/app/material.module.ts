import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';

const modules = [
  MatSliderModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatRadioModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, modules],
  exports: [modules],
})
export class MaterialModule {}
