import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('request is on its way to ${request.url}');

    
    const authReq = request.clone({
      setHeaders: {
        Authorization: 'Bearer the token'
      }
    });
    
    return next.handle(authReq);
  }
}
