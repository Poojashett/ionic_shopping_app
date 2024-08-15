import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
    cartItems: any[] = [];
    total: number = 0;

    constructor(private cartService: CartService, private router: Router) { }

    ngOnInit() {
        this.cartItems = this.cartService.getCartItems();
        this.calculateTotal();

        this.cartService.getCartCount().subscribe(() => {
            this.cartItems = this.cartService.getCartItems();
            this.calculateTotal();
        });
    }

    decrementQuantity(item: any) {
        if (item.quantity > 1) {
            item.quantity--;
            this.cartService.updateCartItem(item);
            this.calculateTotal();
        }
    }

    incrementQuantity(item: any) {
        item.quantity++;
        this.cartService.updateCartItem(item);
        this.calculateTotal();
    }

    removeFromCart(item: any) {
        this.cartService.removeFromCart(item);
        this.cartItems = this.cartService.getCartItems();
        this.calculateTotal();
    }

    proceedToPayment() {
        this.router.navigate(['/order-summary']);
    }

    calculateTotal() {
        this.total = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}
