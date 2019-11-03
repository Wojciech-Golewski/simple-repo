import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

const apiShopUrl = 'https://localhost:44354/api/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get<any>(apiShopUrl);
  }
}