import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Const } from './constants/const';

const routes: Routes = [
  {
    path: '',
    redirectTo: Const.HOME_URL,
    pathMatch: 'full'
  },
  {
    path: Const.PRODUCTS_URL,
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: Const.HOME_URL,
    loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
