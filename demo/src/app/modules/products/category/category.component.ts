import { Component, OnInit, OnDestroy } from '@angular/core';
import { shopService } from '../../../services/shop.service';
import { PoductList } from '../../../model/shop.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  constructor(private _pl: shopService) { }
  prodListArray: PoductList = new PoductList();
  prodSubs: Subscription;

  ngOnInit(): void {
    this.prodSubs = this._pl.getProductsList().subscribe((res: any) => {  
      this.prodListArray = res;
    });
  }

  ngOnDestroy() {
    if (this.prodSubs) {
        this.prodSubs.unsubscribe();
    }
   
  }

}
