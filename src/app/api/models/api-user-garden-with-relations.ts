/* tslint:disable */
/* eslint-disable */
import { API_UserWithRelations } from './api-user-with-relations';

/**
 * (tsType: UserGardenWithRelations, schemaOptions: { includeRelations: true })
 */
export interface API_UserGardenWithRelations {
  defaultGarden?: boolean;
  description?: string;
  id?: string;
  image?: string;
  name: string;
  owned_garden_objects?: Array<string>;
  user?: API_UserWithRelations;
  userId?: string;
}
