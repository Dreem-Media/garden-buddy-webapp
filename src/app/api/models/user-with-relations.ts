/* tslint:disable */
/* eslint-disable */
import { UserCredentialsWithRelations } from './user-credentials-with-relations';
import { UserGardenWithRelations } from './user-garden-with-relations';

/**
 * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
 */
export interface UserWithRelations {
  email: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  postcode?: string;
  resetCount?: number;
  resetKey?: string;
  resetKeyTimestamp?: string;
  resetTimestamp?: string;
  roles?: Array<string>;
  userCredentials?: UserCredentialsWithRelations;
  user_gardens?: Array<UserGardenWithRelations>;
}
