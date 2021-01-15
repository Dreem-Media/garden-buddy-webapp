import { Injectable } from '@angular/core';
import { UserGardenManagementControllerService } from '../api/services';
import { CoreHelpersService } from '../_services/core-helpers.service';

@Injectable({
    providedIn: 'root'
})
export class UserGardenService {

    constructor(
        private apiUserGardenService: UserGardenManagementControllerService
    ) { }

    getUserGarden(id: string) {
        return this.apiUserGardenService.findById({ id });
    }
}
