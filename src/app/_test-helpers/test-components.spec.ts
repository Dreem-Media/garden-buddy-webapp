import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../_models/_core/_users/user.model';

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
  private currentUserTokenSubject: BehaviorSubject<string>;
  constructor() {
    const userToken = sessionStorage.getItem('currentUser');
    this.currentUserTokenSubject = new BehaviorSubject<string>('');
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
