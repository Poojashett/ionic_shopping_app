import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage {
  address = {
    street: '',
    city: '',
    state: '',
    zip: ''
  };
  paymentMethod: string = '';

  constructor(private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', {
        address: this.address,
        paymentMethod: this.paymentMethod
      });

      this.router.navigate(['/order-confirmation']);
    } else {
      form.form.markAllAsTouched();
    }
  }
}
