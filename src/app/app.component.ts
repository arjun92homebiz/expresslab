import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expresslab';
  cart: any;
  shouldBeHidden: boolean = true;

  constructor(private cartService: CartService) {
    this.cartService.getItem().subscribe(response => {
      this.cart = response;
      console.log(this.cart);
    });
  }

  toggleForm(index) {
    this.cart[index].beingupdated = !this.cart[index].beingupdated;
    console.log(this.cart[index]);
  }

  addNewItem(form) {
    this.cartService.addItem(form).subscribe(response => {
      this.cart = response;
    });
  }

  deleteItem(id) {
    console.log(id);
    this.cartService.removeItem(id).subscribe(response => {
      this.cart = response;
    });
  }

  updateItem(item) {
    this.cartService.putItem(item).subscribe(response => {
      this.cart = response;
    });
  }
}
