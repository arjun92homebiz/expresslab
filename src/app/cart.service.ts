import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get("/api/cart-items", { responseType: "json"});
  }

  addItem(item) {
    console.log(item)
    return this.http.post("/api/cart-items", item.value, { responseType: "json"});
  }

  removeItem(id) {
    console.log(id);
    return this.http.delete(`/api/cart-items/${id}`, { responseType: "json"});
  }

  putItem(item) {
    return this.http.put(`/api/cart-items/${item.id}`, item , { responseType: "json"});
  }
  // getAllItems(){
  //   return this.http.get("/api/cart-items", { responseType: "json"});
  // }

}
