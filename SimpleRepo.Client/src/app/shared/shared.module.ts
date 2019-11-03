import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

  ],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
