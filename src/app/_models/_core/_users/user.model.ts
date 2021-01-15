import { API_UserCredentialsWithRelations, API_UserGardenWithRelations, API_UserWithRelations } from 'src/app/api/models';

export class User implements API_UserWithRelations {
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
  userCredentials?: API_UserCredentialsWithRelations | undefined;
  user_gardens?: API_UserGardenWithRelations[];

  constructor(user: User) {
    this.email = user.email;
  }
}
