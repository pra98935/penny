import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { PoductList, SliderProdList } from '../model/shop.model';
import { CategoryList } from '../model/shop.model';



@Injectable({
  providedIn: 'root'
})
export class shopService {

  constructor(private _http: HttpClient) {}

  /**
   * @description, Get product list
   * @returns Array
  */
  getProductsList(): Observable<PoductList> {
    return this._http.get<PoductList>('assets/jsonData/productList.json').pipe(
      map(data => {
        return data;
      }),
      retry(1),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * @description, Get Category list
   * @returns Array
  */
  getCategoryList(): Observable<CategoryList> {
    return this._http.get<CategoryList>('assets/jsonData/categoryList.json').pipe(
      map(data => {
        return data;
      }),
      retry(1),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * @description, Get Slider list
   * @returns Array
  */
  getSliderList(): Observable<SliderProdList> {
    return this._http.get<SliderProdList>('assets/jsonData/slider.json').pipe(
      map(data => {
        return data;
      }),
      retry(1),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * @description, Get Slider list
   * @returns Array
  */
  getFooterLinkList(): Observable<any> {
    return this._http.get<any>('assets/jsonData/footerlink.json').pipe(
      map(data => {
        return data;
      }),
      retry(1),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * error Handling
   * @param error , Error data
  */
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
