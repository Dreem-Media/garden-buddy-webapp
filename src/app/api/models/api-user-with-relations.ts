/* tslint:disable */
/* eslint-disable */
import { API_UserCredentialsWithRelations } from './api-user-credentials-with-relations';
import { API_UserGardenWithRelations } from './api-user-garden-with-relations';

/**
 * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
 */
export interface API_UserWithRelations {
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
  userCredentials?: API_UserCredentialsWithRelations;
  user_gardens?: Array<API_UserGardenWithRelations>;
}
