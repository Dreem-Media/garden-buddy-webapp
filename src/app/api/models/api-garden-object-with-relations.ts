/* tslint:disable */
/* eslint-disable */
import { API_GardenObjectTaskWithRelations } from './api-garden-object-task-with-relations';

/**
 * (tsType: GardenObjectWithRelations, schemaOptions: { includeRelations: true })
 */
export interface API_GardenObjectWithRelations {
  description?: string;
  gardenObjectTasks?: Array<API_GardenObjectTaskWithRelations>;
  garden_category_ids?: Array<string>;
  id?: string;
  image?: string;
  name: string;
  owned_count?: number;
}
