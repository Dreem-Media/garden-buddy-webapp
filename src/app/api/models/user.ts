/* tslint:disable */
/* eslint-disable */
export interface User {
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
}

export class User implements User {
  constructor() {}
}
