import {
  HttpClient,
  HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BASE_URL } from 'src/app/@core/@utills/constant';
import { API_TYPE } from '../@utills/api-type';


@Injectable({
  providedIn:'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }

  getHeader() {
    var session = JSON.parse(localStorage.getItem('session'));
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', "http://localhost:4200")
      .set('Content-Type', 'application/json');
    console.log(headers);

    return headers;
  }

  getUrl(url) {
    return BASE_URL + url;
  }

  httpRequest(type, url, data): Observable<any> {
    if (type == API_TYPE.GET) {
      return this.http.get(this.getUrl(url), {
        params: data,
      });
    }
  }

  handleError(errorResponse: HttpErrorResponse) {
    console.log('From common service');

    if (!navigator.onLine) {
      return 'No Internet Connection';
    }

    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    // return an observable with a meaningful error message to the end user
    return throwError(
      errorResponse
      // "There is a problem with the service. We are notified & working on it. Please try again later."
    );
  }
}
