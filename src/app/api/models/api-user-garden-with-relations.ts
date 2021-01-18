/* tslint:disable */
/* eslint-disable */
import { API_UserGardenTodoItemWithRelations } from './api-user-garden-todo-item-with-relations';
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
  userGardenTodoItems?: Array<API_UserGardenTodoItemWithRelations>;
  userId?: string;
}
