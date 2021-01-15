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
  ) {}

  getGardenObjectsByOwnedCount(ignoreUserGardenOwned = false) {
    const params = this.coreHelpers.getSearchPaginationParams();
    return this.apiGardenObjectService.find(params);
  }
}
