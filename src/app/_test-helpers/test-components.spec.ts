import { Observable, of, BehaviorSubject } from 'rxjs';
import { GardenObject } from '../api/models';
import { User } from '../api/models/user';

export class UserServiceStub {
  getUserCount() {
    return of([]);
  }
  getAllUsers() {
    return of([]);
  }
  getUserById() {
    return of([]);
  }
  hasRole() {
    return false;
  }
}

export class MatDialogStub {}

export class RouterStub {
  navigate() {}
}

export class AlertsServiceStub {}

export class AuthenticationServiceStub {
  private currentUserTokenSubject: BehaviorSubject<User>;
  public currentUserToken: Observable<User>;
  private isResetModeSubject: BehaviorSubject<boolean>;
  public isResetMode: Observable<boolean>;
  constructor() {
    const userToken = sessionStorage.getItem('currentUser');
    this.currentUserTokenSubject = new BehaviorSubject<User>(
      userToken && JSON.parse(userToken)
    );
    this.currentUserToken = this.currentUserTokenSubject.asObservable();
    this.isResetModeSubject = new BehaviorSubject<boolean>(false);
    this.isResetMode = this.isResetModeSubject.asObservable();
  }
  public get currentUserValue(): User {
}

export class MyGardenServiceStub {
  getUserGardenObjects() {
    return of([]);
  }
}

export class GardenObjectsServiceStub {
  getGardenObjects() {
    return of([]);
  }
  getGardenObjectsCount() {
    return of(0);
  }
  getUserGardenObjects() {
    return of([]);
  }
  getGardenObjectById() {
    return of(new GardenObject());
  }
  getGardenObjectsByOwnedCount() {
    return of([]);
  }
}

export class SuggestionsServiceStub {
  deleteSuggestionById() {
    return of();
  }
}
