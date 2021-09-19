import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private aRouter: ActivatedRoute) {
  }

  selectedItm: string = "Mobile";
  isShopPage: boolean = false;


  ngOnInit(): void {
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

  changeItm(itm) {
    this.selectedItm = itm;
  }

}
