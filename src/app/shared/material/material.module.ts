import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ]
})
export class MaterialModule { }
