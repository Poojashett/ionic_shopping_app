
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
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
            path: '',
            redirectTo: '/tabs/home',
            pathMatch: 'full',
          },
        ],
      },
    ]),
  ],
  declarations: [TabsPage],
})
export class TabsPageModule { }
