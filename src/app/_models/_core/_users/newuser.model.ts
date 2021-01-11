import { API_NewUser } from 'src/app/api/models';

export class NewUser implements API_NewUser {
  email: string;
  firstName?: string | undefined;
  id?: string | undefined;
  lastName?: string | undefined;
  password: string;
  postcode?: string | undefined;
  resetCount?: number | undefined;
  resetKey?: string | undefined;
  resetKeyTimestamp?: string | undefined;
  resetTimestamp?: string | undefined;
  roles?: string[] | undefined;

  constructor(newUser?: NewUser) {
    this.email = newUser?.email ?? '';
    this.password = newUser?.password ?? '';
  }
}
