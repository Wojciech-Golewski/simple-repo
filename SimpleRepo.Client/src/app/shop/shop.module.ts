import { NgModule } from '@angular/core';

import { ShopRoutingModule } from './shop-routing.module';
import { MainTableComponent } from './components/main-table/main-table.component';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainTableComponent,
    ShopMainComponent
  ],
  imports: [
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
