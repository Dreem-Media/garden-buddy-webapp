import { API_GardenObjectSuggestion } from 'src/app/api/models';

export class GardenObjectSuggestion implements API_GardenObjectSuggestion {
  description?: string | undefined;
  garden_category_ids?: string[] | undefined;
  id?: string | undefined;
  name: string;
  suggested_by_user_id?: string | undefined;

  constructor(gardenObjectSuggestion?: GardenObjectSuggestion) {
    this.name = gardenObjectSuggestion?.name ?? '';
  }
}
