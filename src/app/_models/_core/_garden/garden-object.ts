import { API_GardenObject } from 'src/app/api/models';
export class GardenObject implements API_GardenObject {
  title?: string;
  description?: string | undefined;
  garden_category_ids?: string[] | undefined;
  garden_object_tasks?: string[] | undefined;
  id?: string | undefined;
  image?: string | undefined;
  name: string;
  owned_count?: number | undefined;
  gardenTasks?: any[];

  constructor(gardenObject?: GardenObject) {
    this.name = gardenObject?.name ?? '';
  }
}
