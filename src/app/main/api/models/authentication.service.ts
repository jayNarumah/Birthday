import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthUser } from './resources/auth-user';
import { Role } from './resources/role';
import Swal from 'sweetalert2';
import { Router } from "@angular/router";
export interface LoginResponse {

  access_token: string;
  token_type: string;
  user: {
    id: number;
    profile_id: number;
    user_type_id: number;
    email: string;
    password: string;
  };
  role: Role;
}
@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  //public
  public currentUser: Observable<AuthUser>;

  //private
  private currentUserSubject: BehaviorSubject<AuthUser>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService,

    private router: Router,) {
    this.currentUserSubject = new BehaviorSubject<AuthUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): AuthUser {
    return this.currentUserSubject.value;
  }

  /**
   *  Confirms if user is admin
   */
  get isSuper() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Super;
  }

  /**
   *  Confirms if user is client
   */
  get isAdmins() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
  }

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(email: string, password: string) {
    return this._http
      .post<LoginResponse>(`${environment.apiUrl}api/login`, { email, password })
      .pipe(
        map(response => {
          // login successful if there's a jwt token in the response
          if (response && response.access_token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            console.log(response.access_token);
            const responseUser = response.user;
            let authUser = new AuthUser();
            authUser = { ...responseUser, role: response.role, token: response.access_token, avatar: "avatar-s-11.jpg" };
            // console.log("Auth User: ", authUser);
            // Display welcome toast!
            localStorage.setItem('currentUser', JSON.stringify(authUser));
            // this.router.navigate(['items'], { relativeTo: this.route });
            setTimeout(() => {
              this._toastrService.show(
                'You have successfully logged in as' +
                ' ADMIN ' +
                'to Birthday Notification. Now you can start to explore. Enjoy!',
                '👋 Welcome, ' + authUser.email + '!',
                { toastClass: 'toast ngx-toastr', positionClass: 'toast-top-center', closeButton: true }
                // { toastClass: 'toast ngx-toastr', positionClass: ' toast-top-right', closeButton: true }
              );
            }, 4000);

            // notify
            this.currentUserSubject.next(authUser);
          }

          return response;
        })
      );
  }



  /**
   * User logout
   *
   */

  _logoutUrl = environment.apiUrl + 'api/logout';
  logoutUser() {
    Swal.showLoading();
    this._http.post(this._logoutUrl, {}).subscribe(
      success => {
        localStorage.removeItem('token');
        localStorage.removeItem('dashboard2');
        localStorage.removeItem('add-users2');
        localStorage.removeItem('add-users');
        localStorage.removeItem('todays-birthday');
        localStorage.removeItem('existing-user'); 
        localStorage.removeItem('dashboard');
        localStorage.removeItem('add-users');
        localStorage.removeItem('make-admin');
        localStorage.removeItem('manage-admin');
        localStorage.removeItem('manage-groups');
        localStorage.removeItem('list-of-users');
        localStorage.removeItem('list-of-groups');
        localStorage.removeItem('add-group');
        Swal.close();
        this.router.navigate(['/auth/login']);
      },
      error => {
        Swal.fire(
          'Error',
          error.error.message || 'Some Error Occured',
          'error'
        );
      }
    );
  }

getToken() {
  // console.log(localStorage.getItem('token'))
  return localStorage.getItem('token') || '';
}

}