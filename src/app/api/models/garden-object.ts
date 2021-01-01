/* tslint:disable */
/* eslint-disable */
export interface GardenObject {
  description?: string;
  garden_category_ids?: Array<string>;
  garden_object_tasks?: Array<string>;
  id?: string;
  image?: string;
  name: string;
  owned_count?: number;
}

export class GardenObject implements GardenObject {}
