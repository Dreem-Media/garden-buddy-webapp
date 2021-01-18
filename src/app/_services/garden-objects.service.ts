import { Injectable } from '@angular/core';
import { GardenObjectManagementControllerService } from '../api/services';
import { CoreHelpersService } from './core-helpers.service';

@Injectable({
  providedIn: 'root',
})
export class GardenObjectsService {
  constructor(
    private apiGardenObjectService: GardenObjectManagementControllerService,
    private coreHelpers: CoreHelpersService
  ) { }

  getGardenObjectsByOwnedCount(ignoreUserGardenOwnedIds?: string[]) {
    const params = this.coreHelpers.getSearchPaginationParams(undefined, undefined, undefined, ignoreUserGardenOwnedIds);
    return this.apiGardenObjectService.find(params);
  }
}
