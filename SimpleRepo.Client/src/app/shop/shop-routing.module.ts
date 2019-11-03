import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopMainComponent } from './components/shop-main/shop-main.component';


const routes: Routes = [
  {
    path: '',
    component: ShopMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
