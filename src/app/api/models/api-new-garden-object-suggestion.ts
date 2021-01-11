/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<GardenObjectSuggestion, 'id'>, schemaOptions: { title: 'NewGardenObjectSuggestion', exclude: [ 'id' ] })
 */
export interface API_NewGardenObjectSuggestion {
  description?: string;
  garden_category_ids?: Array<string>;
  name: string;
  suggested_by_user_id?: string;
}
