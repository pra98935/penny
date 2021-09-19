import { Component, OnInit, OnDestroy } from '@angular/core';
import { shopService } from '../../../services/shop.service';
import { CategoryList, SliderProdList } from '../../../model/shop.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private _pl: shopService) { }

  categoryData: CategoryList = new CategoryList();
  sliderData: SliderProdList = new SliderProdList();

  catSubs: Subscription;
  slideSubs: Subscription;


  ngOnInit(): void {
    this.catSubs = this._pl.getCategoryList().subscribe((res: any) => {  
      this.categoryData = res;
    });

    this.slideSubs = this._pl.getSliderList().subscribe((res: any) => {  
      this.sliderData = res;
    });
  }

  ngOnDestroy() {
    if (this.catSubs) {
        this.catSubs.unsubscribe();
    }
    if (this.slideSubs) {
        this.slideSubs.unsubscribe();
    }
  }

}
