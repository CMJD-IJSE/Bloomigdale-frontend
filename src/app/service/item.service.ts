import { Injectable } from '@angular/core';
import ItemDTO from '../dto/ItemDTO';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = environment.baseUrl;


  constructor(private http: HttpClient) { }

  public saveItem(c: ItemDTO): Observable<any>{
    return this.http.post(this.baseUrl + 'saveItem', {
      orderID: c.orderID,
      itemID: c.itemID,
      itemName: c.itemName,
      itemSize: c.itemSize,
      itemColor: c.itemColor,
      itemQty: c.itemQty,
      itemPrice: c.itemPrice,
    });
  }

  public getAllItem(): Observable<any>{
    return this.http.get(this.baseUrl + 'getAllItems');
  }

  public deleteItem(id: string): Observable<any>{
    return this.http.delete(this.baseUrl + 'deleteItem', {headers: {id}});
  }

  public updateItem(c: ItemDTO): Observable<any>{
    return this.http.put(this.baseUrl + 'updateItem', {
      orderID: c.orderID,
      itemID: c.itemID,
      itemName: c.itemName,
      itemSize: c.itemSize,
      itemColor: c.itemColor,
      itemQty: c.itemQty,
      itemPrice: c.itemPrice,
    });
  }
}
