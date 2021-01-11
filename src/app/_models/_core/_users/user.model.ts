import { API_User } from 'src/app/api/models';

export class User implements API_User {
  email: string;
  firstName?: string | undefined;
  id?: string | undefined;
  lastName?: string | undefined;
  postcode?: string | undefined;
  resetCount?: number | undefined;
  resetKey?: string | undefined;
  resetKeyTimestamp?: string | undefined;
  resetTimestamp?: string | undefined;
  roles?: string[] | undefined;

  constructor(user: User) {
    this.email = user.email;
  }
}
