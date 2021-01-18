import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { API_UserGarden } from 'src/app/api/models';
import { GardenObject } from 'src/app/_models/_core/_garden/garden-object';
import { GardenObjectsService } from 'src/app/_services/garden-objects.service';
import { LoadingService } from 'src/app/_services/loading.service';
import { UserService } from 'src/app/_services/user.service';
import { UserGardenService } from '../user-garden.service';

@Component({
  selector: 'app-garden-overview',
  templateUrl: './garden-overview.component.html'
})
export class GardenOverviewComponent implements OnInit {

  public userGarden: API_UserGarden;

  public popularGardenObjects: GardenObject[] = [];

  public searchGardenObjectsCtrl = new FormControl();

  constructor(
    private gardenObjectsService: GardenObjectsService,
    private route: ActivatedRoute,
    private userGardenService: UserGardenService,

    public loadingService: LoadingService,
    public userService: UserService
  ) {
    // Built from Resolver
    this.userGarden = this.route.snapshot.data.garden;
  }

  ngOnInit(): void {
    this.getPopularGardenObjects();
  }

  private getPopularGardenObjects(): void {
    this.gardenObjectsService
      .getGardenObjectsByOwnedCount(true)
      .subscribe((allPopularObjects: GardenObject[]) => {
        this.popularGardenObjects = allPopularObjects;
        this.loadingService.loading = false;
      }, () => this.loadingService.loading = false)
  }

  public addItemToUserGarden(
    gardenObject: GardenObject,
    removeFromInput = false
  ): void {
    this.loadingService.loading = true;
    this.userGardenService.addOwnedItemToGarden(this.userGarden.id!, gardenObject.id!).subscribe(
      () => {
        if (removeFromInput) {
          this.searchGardenObjectsCtrl.setValue("");
        }
        this.getPopularGardenObjects();
        this.loadingService.loading = false;
      },
      () => (this.loadingService.loading = false)
    );
  }

}
