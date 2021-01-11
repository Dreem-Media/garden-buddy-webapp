import { Injectable } from '@angular/core';
import { User } from '../_models/_core/_users/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  private localCurrentUser!: User | null;

  public get currentUser(): User | null {
    if (!this.localCurrentUser) {
      const storage = sessionStorage.getItem('currentUser');
      if (storage) {
        this.localCurrentUser = JSON.parse(storage);
      }
    }
    return this.localCurrentUser;
  }

  public set currentUser(user: User | null) {
    if (!this.localCurrentUser) {
      this.localCurrentUser = user;
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      throw new Error('Unable to set user, already exists');
    }
  }

  public removeUser(): void {
    this.localCurrentUser = null;
    sessionStorage.removeItem('currentUser');
  }

  public hasRole(role: string): boolean {
    const roles = this.currentUser?.roles;
    if (!roles || !roles.length) {
      return false;
    }
    return roles.includes(role);
  }
}
