/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<UserGarden, 'id'>, schemaOptions: { title: 'NewUserGarden', exclude: [ 'id' ] })
 */
export interface API_NewUserGarden {
  defaultGarden?: boolean;
  description?: string;
  image?: string;
  name: string;
  owned_garden_objects?: Array<string>;
  userId?: string;
}
