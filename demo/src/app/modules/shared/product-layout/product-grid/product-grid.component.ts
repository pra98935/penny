import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PoductList } from '../../../../model/shop.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  constructor() { }

  @Input('prodListArray') prodListArray: [];
  //prodListDataArray: PoductList = new PoductList();

  page = 1;
  pageSize = 10;
  start;
  end;
 
  totalDataCount: number = 0;
  finalData = [];

  ngOnChanges(changes: SimpleChanges) {
      this.finalData = [];
      this.totalDataCount = 0;
      if (changes.hasOwnProperty("prodListArray")) {
        //this.prodListDataArray = changes.prodListArray.currentValue;
        this.totalDataCount = changes.prodListArray.currentValue.length;
        for (let i = 0; i <= changes.prodListArray.currentValue.length; i++) {
          if(changes.prodListArray.currentValue[i] != undefined){
            this.finalData.push(changes.prodListArray.currentValue[i]);
          }
        }
      }
  }

  ngOnInit(): void {
      
  }

}