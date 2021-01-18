/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<GardenObject, 'id'>, schemaOptions: { title: 'NewGardenObject', exclude: [ 'id' ] })
 */
export interface API_NewGardenObject {
  description?: string;
  garden_category_ids?: Array<string>;
  image?: string;
  name: string;
  owned_count?: number;
}
