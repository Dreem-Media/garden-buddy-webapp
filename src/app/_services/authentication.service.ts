import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../api/models';
import { UserManagementControllerService } from '../api/services/user-management-controller.service';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<String>;
  public currentUser: Observable<String>;
  public currentUserTokenValue: any;

  constructor(
    private userService: UserService,
    private apiUserService: UserManagementControllerService
  ) {
    const sessionUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<String>(
      sessionUser && JSON.parse(sessionUser)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): String {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    const params = {
      body: { email, password },
    };
    return this.apiUserService.login(params).pipe(
      map((token) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        sessionStorage.setItem('currentUser', JSON.stringify(token));
        this.currentUserSubject.next(token.token!);
        this.apiUserService.printCurrentUser().subscribe((data) => {
          this.userService.currentUser = data as User;
          return data;
        });
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userService.removeUser();
    this.currentUserSubject.next('');
  }
}
