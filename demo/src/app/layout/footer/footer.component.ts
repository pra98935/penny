import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { shopService } from '../../services/shop.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private _pl: shopService) {
  }

  isShopPage: boolean = false;
  ftrlinkSubs: Subscription
  ftrlinks = [];

  col1 = [];
  col2 = [];
  col3 = [];
  col4 = [];
  col5 = [];

  ngOnInit(): void {

    
    this.ftrlinkSubs = this._pl.getFooterLinkList().subscribe((res: any) => {  
        this.ftrlinks = res;
        console.log(res);
        // this.col1 = res.col1;
        // this.col2 = res.col2;
        // this.col3 = res.col3;
        // this.col4 = res.col4;
        // this.col5 = res.col5;
    });
    

    // Get Current URL
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((s: NavigationEnd) => {
        //this.currentPage = s.urlAfterRedirects;
        let prodPage = s.urlAfterRedirects.includes("products") 
        if(prodPage == true){
          this.isShopPage = true;
        }else{
          this.isShopPage = false;
        }
      });
  }

  scrollToTop() {
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }
    })();
}

}
