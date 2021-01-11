import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserManagementControllerService } from '../api/services/user-management-controller.service';
import { User } from '../_models/_core/_users/user.model';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor(
    private userService: UserService,
    private apiUserService: UserManagementControllerService
  ) {
    const sessionUser = localStorage.getItem('currentUserToken');
    this.currentUserSubject = new BehaviorSubject<string>(
      sessionUser && JSON.parse(sessionUser)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<void> {
    const params = {
      body: { email, password },
    };
    return this.apiUserService.login(params).pipe(
      map((token) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        sessionStorage.setItem('currentUserToken', JSON.stringify(token));
        if (token.token) {
          this.currentUserSubject.next(token.token);
        }
        this.apiUserService.printCurrentUser().subscribe((data) => {
          this.userService.currentUser = data as User;
          return data;
        });
      })
    );
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUserToken');
    this.userService.removeUser();
    this.currentUserSubject.next('');
  }
}
