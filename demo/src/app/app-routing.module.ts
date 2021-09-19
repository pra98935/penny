import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Const } from './constants/const';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';

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
  },
  {
    path:'**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
