import { Component, OnInit } from '@angular/core';
import { GardenObject } from 'src/app/_models/_core/_garden/garden-object';
import { GardenObjectsService } from 'src/app/_services/garden-objects.service';
import { LoadingService } from 'src/app/_services/loading.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-my-garden',
  templateUrl: './my-garden.component.html'
})
export class MyGardenComponent implements OnInit {

  public popularGardenObjects: GardenObject[] = [];

  constructor(
    private gardenObjectsService: GardenObjectsService,
    public loadingService: LoadingService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.getPopularGardenObjects();
  }

  getPopularGardenObjects(): void {
    this.gardenObjectsService
      .getGardenObjectsByOwnedCount()
      .subscribe((allPopularObjects: GardenObject[]) => {
        this.popularGardenObjects = allPopularObjects;
        this.loadingService.loading = false;
      }, () => this.loadingService.loading = false)
  }

}
