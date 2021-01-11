/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: NewUserRequest, schemaOptions: { title: 'NewUser' })
 */
export interface NewUser {
  email: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  password: string;
  postcode?: string;
  resetCount?: number;
  resetKey?: string;
  resetKeyTimestamp?: string;
  resetTimestamp?: string;
  roles?: Array<string>;
}
