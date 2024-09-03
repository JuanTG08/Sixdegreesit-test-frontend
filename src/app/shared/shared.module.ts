import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class SharedModule {}
