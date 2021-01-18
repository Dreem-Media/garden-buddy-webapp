/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<UserGardenTodoItem, 'id'>, 'userGardenId'>, schemaOptions: { title: 'NewUserGardenTodoItemInUserGarden', exclude: [ 'id' ], optional: [ 'userGardenId' ] })
 */
export interface API_NewUserGardenTodoItemInUserGarden {
  isComplete?: boolean;
  relatedGardenObjectTaskId: string;
  taskDate: string;
  userGardenId?: string;
}
