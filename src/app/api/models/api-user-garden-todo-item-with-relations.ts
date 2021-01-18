/* tslint:disable */
/* eslint-disable */
import { API_UserGardenWithRelations } from './api-user-garden-with-relations';

/**
 * (tsType: UserGardenTodoItemWithRelations, schemaOptions: { includeRelations: true })
 */
export interface API_UserGardenTodoItemWithRelations {
  id?: string;
  isComplete?: boolean;
  relatedGardenObjectTaskId: string;
  taskDate: string;
  userGarden?: API_UserGardenWithRelations;
  userGardenId?: string;
}
