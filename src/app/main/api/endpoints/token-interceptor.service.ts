import { Injectable, Injector } from '@angular/core';
// import {
//     HttpErrorResponse,
//     HttpInterceptor,
//     HttpRequest
// } from '@angular/common/http';
// import { AuthService } from './auth.service';
// import { Router } from '@angular/router';
// import { catchError, map, tap } from 'rxjs/operators';
// import { HttpResponse } from '@angular/common/http';
// import { HttpEvent } from '@angular/common/http';
// import { of, throwError } from 'rxjs';
// import { RequestCacheWithMap } from './request-cache.service';
// import { AuthenticationService } from './authentication.service'; 
import { HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../models/authentication.service';
import { RequestCacheWithMap } from './request-cache.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    constructor(
        private injector: Injector,
        private router: Router,
        private cache: RequestCacheWithMap,
        private authenticationService: AuthenticationService
    ) {}

    intercept(req, next) {
        // let authService = this.injector.get(AuthService);
        // let tokenizedReq = req.clone({
        //     headers: req.headers.set('token', authService.getToken())
        // });

        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            req = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    `Bearer ${currentUser.token}`
                )
            });

            if(this.router.url == '/login') {
                this.router.navigate(['dashboard'])
            }
        }

        return next.handle(req); 
    }

    isCachable(req) {
        // console.log(req.method);
        return req.method === 'GET';
    }
}
