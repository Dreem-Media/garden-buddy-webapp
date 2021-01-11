/* tslint:disable */
/* eslint-disable */
import { UserWithRelations } from './user-with-relations';

/**
 * (tsType: UserGardenWithRelations, schemaOptions: { includeRelations: true })
 */
export interface UserGardenWithRelations {
  defaultGarden?: boolean;
  description?: string;
  id?: string;
  image?: string;
  name: string;
  owned_garden_objects?: Array<string>;
  user?: UserWithRelations;
  userId?: string;
}
