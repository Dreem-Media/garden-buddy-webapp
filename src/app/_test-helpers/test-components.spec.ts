import { Observable, of, BehaviorSubject } from 'rxjs';
import { GardenObject } from '../api/models';
import { User } from '../api/models/user';

export class UserServiceStub {
  hasRole(): boolean {
    return false;
  }
}

export class MatDialogStub {}

export class RouterStub {
  navigate(): void {}
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
  public get currentUserValue(): {} {
    return { token: '' };
  }
}

export class MyGardenServiceStub {
  getUserGardenObjects(): Observable<[]> {
    return of([]);
  }
}

export class GardenObjectsServiceStub {}

export class SuggestionsServiceStub {
  deleteSuggestionById(): Observable<[]> {
    return of();
  }
}
