import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError,throwError } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const idToken: any = JSON.parse(localStorage.getItem("user")!)
    console.log(idToken);

    if (idToken) {
      const cloned = request.clone({
          headers: request.headers.set("Authorization",
              "Bearer " + idToken?.token)
      });

      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('http error', error);
          
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
                console.log('This is client side error');
                errorMsg = `Error: ${error.error.message}`;
            } else {
                console.log('This is server side error');
                errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            }
            console.log(errorMsg);
            return throwError(errorMsg);
        })
    );
  }
  else {
      return next.handle(request);
  }
}
}
