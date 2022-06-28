import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth/auth.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const user = this.authService.userValue;

    const isLoggedIn = user && user.token;

    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {

      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Access-Control-Allow-Origin', 'http://localhost:4200')
        .set('Access-Control-Allow-Credentials', 'true')
        .set('Authorization', `Bearer ${user.token}` )
      });
    }

    return next.handle(request);
  }


}
