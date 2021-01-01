/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: GardenObjectWithRelations, schemaOptions: { includeRelations: true })
 */
export interface GardenObjectWithRelations {
  description?: string;
  garden_category_ids?: Array<string>;
  garden_object_tasks?: Array<string>;
  id?: string;
  image?: string;
  name: string;
  owned_count?: number;
}
