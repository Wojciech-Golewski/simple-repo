import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    TableComponent
  ]
})
export class SharedModule { }
