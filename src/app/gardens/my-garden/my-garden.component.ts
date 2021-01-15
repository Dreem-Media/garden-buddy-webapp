import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API_UserGarden } from 'src/app/api/models';
import { GardenObject } from 'src/app/_models/_core/_garden/garden-object';
import { GardenObjectsService } from 'src/app/_services/garden-objects.service';
import { LoadingService } from 'src/app/_services/loading.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-my-garden',
  templateUrl: './my-garden.component.html'
})
export class MyGardenComponent implements OnInit {

  public userGarden: API_UserGarden;

  public popularGardenObjects: GardenObject[] = [];

  constructor(
    private gardenObjectsService: GardenObjectsService,
    private route: ActivatedRoute,

    public loadingService: LoadingService,
    public userService: UserService
  ) {
    // Built from Resolver
    this.userGarden = this.route.snapshot.data.garden;
  }

  ngOnInit(): void {
    this.getPopularGardenObjects();
  }

  getPopularGardenObjects(): void {
    this.gardenObjectsService
      .getGardenObjectsByOwnedCount(true)
      .subscribe((allPopularObjects: GardenObject[]) => {
        this.popularGardenObjects = allPopularObjects;
        this.loadingService.loading = false;
      }, () => this.loadingService.loading = false)
  }

}
