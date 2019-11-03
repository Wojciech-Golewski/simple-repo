import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.scss']
})
export class ShopMainComponent implements OnInit {

  data: ShopItem[];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shopService.getAllData().subscribe(data => {
      this.data = data;
    })
  }

}

export interface ShopItem {
  name: string;
  price: number;
}