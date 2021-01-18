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
    this.currentUserSubject = new BehaviorSubject<string>('');
    this.currentUser = this.currentUserSubject.asObservable();

    const sessionUser = sessionStorage.getItem('currentUserToken');
    if (sessionUser) {
      this.currentUserSubject.next(JSON.parse(sessionUser));
    }
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
        if (token.token) {
          sessionStorage.setItem(
            'currentUserToken',
            JSON.stringify(token.token)
          );
          this.currentUserSubject.next(token.token);
        }
        this.apiUserService.getCurrentUserDetails().subscribe((data) => {
          this.userService.currentUser = data as User;
          return data;
        });
      })
    );
  }

  logout(): void {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUserToken');
    this.userService.removeUser();
    this.currentUserSubject.next('');
  }
}
