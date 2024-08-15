import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../pages/cart/cart.module').then((m) => m.CartPageModule),
      },
      {
        path: 'order-summary',
        loadChildren: () =>
          import('../order-summary/order-summary.module').then((m) => m.OrderSummaryPageModule),
      },
      {
        path: 'order-confirmation',
        loadChildren: () =>
          import('../order-confirmation/order-confirmation.module').then((m) => m.OrderConfirmationPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
