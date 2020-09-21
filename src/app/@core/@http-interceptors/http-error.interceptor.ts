import {
  HttpHandler, HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, timeout } from 'rxjs/operators';
import { CommonService } from '../@services/common.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private cs: CommonService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('From interceptor');
    return next.handle(request).pipe(
      // if responce takes more than one minute
      timeout(60000),
      // ...errors if any
      catchError(this.cs.handleError),
      // ...and calling .json() on the response to return data
      map((res: HttpResponse<any>) => res)
    );
  }
}
