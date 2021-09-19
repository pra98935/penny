import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CategoryList } from '../../../../model/shop.model';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss']
})
export class CategoryGridComponent implements OnInit {

  constructor() { }
  
  @Input('categoryDataArr') categoryDataArr = [];

  categoryData: CategoryList = new CategoryList();
  
  ngOnChanges(changes: SimpleChanges) {
      if (changes.hasOwnProperty("categoryDataArr")) {
        this.categoryData = changes.categoryDataArr.currentValue;
      }
  }

  ngOnInit(): void {
    
    
  }

}
