import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const modules = [MatIconModule, MatInputModule];

@NgModule({
  imports: [CommonModule, modules],
  exports: [modules],
})
export class MaterialModule {}
