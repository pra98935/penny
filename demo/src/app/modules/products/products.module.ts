import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductLayoutModule } from '../shared/product-layout/product-layout.module';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductLayoutModule,
    
  ],
  
})
export class ProductsModule { }
