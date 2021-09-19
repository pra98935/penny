import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { SliderProdList } from '../../../../model/shop.model';

@Component({
  selector: 'app-slider-grid',
  templateUrl: './slider-grid.component.html',
  styleUrls: ['./slider-grid.component.scss']
})
export class SliderGridComponent implements OnInit {

  @Input('sliderDataArr') sliderDataArr: [];

  sliderData: SliderProdList = new SliderProdList();
  
  constructor() { }

  addOption: string = "Add To Order";

  ngOnChanges(changes: SimpleChanges) {
      if (changes.hasOwnProperty("sliderDataArr")) {
        this.sliderData = changes.sliderDataArr.currentValue;
      }
  }
  
  ngOnInit(): void {
    
  }

}
