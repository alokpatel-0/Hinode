import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import {SnackbarService} from './shared/services/snackbar.service'

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private sn :SnackbarService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const idToken: any = JSON.parse(localStorage.getItem('user')!);
    

    if (idToken) {
      const cloned = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + idToken?.token
        ),
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
    } else {
      
      return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
          if (err instanceof HttpErrorResponse) {
           
            if (err.status ===401 || err.status===403) {
              this.router.navigate(['shop']);
              this.sn.open("Not Authorized","Oops",3000);
              console.log('Error Message-', err.error);
            }
          }
          return new Observable<HttpEvent<any>>();
        })
      );
    }
  }
}
