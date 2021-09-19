import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { CategoryGridComponent } from './category-grid/category-grid.component';
import { SliderGridComponent } from './slider-grid/slider-grid.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ProductGridComponent, CategoryGridComponent, SliderGridComponent],
  imports: [
    CommonModule, NgbModule
  ],
  exports:[ProductGridComponent, CategoryGridComponent, SliderGridComponent]
})
export class ProductLayoutModule { }
