import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    kurthas = [
        { name: 'Kurtha 1', description: 'Stylish Kurtha', price: 29.99, image: 'assets/image/kurtha.jpg' },
        { name: 'Kurtha 2', description: 'Elegant Kurtha', price: 39.99, image: 'assets/image/kuttha2.webp' },
        { name: 'Kurtha 3', description: 'Beautiful Kurtha', price: 49.99, image: 'assets/image/kurtha3.jpg' },
    ];

    jeans = [
        { name: 'Jeans 1', description: 'Comfortable Jeans', price: 59.99, image: 'assets/image/jeans.jpg' },
        { name: 'Jeans 2', description: 'Trendy Jeans', price: 69.99, image: 'assets/image/jeans2.webp' },
        { name: 'Jeans 3', description: 'Classic Jeans', price: 79.99, image: 'assets/image/jeans3.webp' },
    ];

    tops = [
        { name: 'Top 1', description: 'Casual Top', price: 19.99, image: 'assets/image/tops.jpg' },
        { name: 'Top 2', description: 'Fancy Top', price: 29.99, image: 'assets/image/tops2.jpg' },
        { name: 'Top 3', description: 'Elegant Top', price: 39.99, image: 'assets/image/tops3.webp' },
    ];
    constructor(private cartService: CartService) { }

    addToCart(product: any) {
        this.cartService.addToCart(product);
        console.log('Product added to cart:', product);
    }
}
