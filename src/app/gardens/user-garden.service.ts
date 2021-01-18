import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGardenManagementControllerService } from '../api/services';

@Injectable({
    providedIn: 'root'
})
export class UserGardenService {

    constructor(
        private apiUserGardenService: UserGardenManagementControllerService
    ) { }

    public getUserGarden(id: string) {
        return this.apiUserGardenService.findById({ id });
    }

    public getOwnedUserGardenItems(id: string) {
        return this.apiUserGardenService.getOwnedUserGardenItems({ id });
    }

    public addOwnedItemToGarden(userGardenId: string, gardenObjectId: string): Observable<void> {
        return this.apiUserGardenService.addOwnedItemToGarden(
            {
                id: userGardenId,
                body: { gardenObjectId }
            }
        );
    }
}
