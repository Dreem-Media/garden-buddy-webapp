import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { API_UserGardenWithRelations } from '../api/models';
import { UserService } from '../_services/user.service';
import { UserGardenService } from './user-garden.service';

@Injectable({
  providedIn: 'root'
})
export class GardenResolver implements Resolve<API_UserGardenWithRelations> {

  constructor(
    private userService: UserService,
    private userGardenService: UserGardenService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<API_UserGardenWithRelations> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.userGardenService.getUserGarden(id);
    } else {
      const userGarden = this.userService.currentUser?.user_gardens?.find(garden => garden.defaultGarden);
      return of(userGarden!);
    }
  }
}
