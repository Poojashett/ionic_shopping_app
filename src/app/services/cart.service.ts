import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    this.updateCartCount();
  }

  updateCartItem(item: any) {
    const index = this.cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (index > -1) {
      this.cartItems[index] = item;
    }
    this.updateCartCount();
  }

  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.name !== item.name);
    this.updateCartCount();
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartCount() {
    return this.cartCountSubject.asObservable();
  }

  private updateCartCount() {
    const count = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.cartCountSubject.next(count);
  }
}
