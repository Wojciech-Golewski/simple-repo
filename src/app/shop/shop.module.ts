import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MainTableComponent } from './components/main-table/main-table.component';
import { ShopMainComponent } from './components/shop-main/shop-main.component';


@NgModule({
  declarations: [
    MainTableComponent,
    ShopMainComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
