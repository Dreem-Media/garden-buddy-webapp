/* tslint:disable */
/* eslint-disable */
export class User {
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

  constructor() {
    this.email = '';
  }
}
