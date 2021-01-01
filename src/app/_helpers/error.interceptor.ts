import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { LoadingService } from '../_services/loading.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }
      if (err.status === 0) {
        // NO CONNECTION TO SERVER
        this.router.navigate(['/error'], { queryParams: { message: `Unable to connect to Server :(` } });
      }
      if (err.status === 500) {
        // Internal error
        this.router.navigate(['/error'], { queryParams: { message: `Internal Error` } });
      }
      const error = err.error;
      return throwError(error);
    }));
  }
}
