import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AlertsService } from "src/app/_services/alerts.service";
import { LoadingService } from "src/app/_services/loading.service";
import { HttpErrorResponse } from "@angular/common/http";
import { monthDefinitions } from "src/app/_models/_helpers/month-definitions.model";
import { dayDefinitions } from "src/app/_models/_helpers/day-definitions.model";
import { GardenObject } from "src/app/api/models";
import { GardenObjectManagementControllerService, GardenObjectSuggestionsManagementControllerService } from "src/app/api/services";

@Component({
  selector: "app-edit-garden-object",
  templateUrl: "./edit-garden-object.component.html",
})
export class EditGardenObjectComponent implements OnInit {
  public currentlyEditingObject!: GardenObject;
  public months = monthDefinitions;
  public days = dayDefinitions;
  public taskOpened: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apiGardenObjectService: GardenObjectManagementControllerService,
    private apiGardenSuggestionService: GardenObjectSuggestionsManagementControllerService,
    private location: Location,
    private alerts: AlertsService,
    public loadingService: LoadingService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("garden-object-id");
    if (id) {
      if (id === "new") {
        this.currentlyEditingObject = new GardenObject();
        let name = this.route.snapshot.queryParamMap.get("name");
        if (name) {
          this.currentlyEditingObject.name = name;
        }
      } else {
        this.apiGardenObjectService.findById({ id }).subscribe((data: GardenObject) => {
          this.currentlyEditingObject = data;
        });
      }
    }
  }

  saveCurrentlyEditing(): void {
    this.loadingService.loading = true;
    // this.sortTasksByDate();
    if (this.currentlyEditingObject.id) {
      // Update existing

      const params = {
        id: this.currentlyEditingObject.id,
        body: this.currentlyEditingObject,
      };

      this.apiGardenObjectService
        .updateById(params)
        .subscribe(
          () => {
            this.alerts.sendMessage(
              `Updated ${this.currentlyEditingObject.name}`
            );
            this.loadingService.loading = false;
          },
          (err: HttpErrorResponse) => {
            this.loadingService.loading = false;
            this.alerts.sendMessage(err.error.message);
          }
        );
    } else {
      // Create new
      this.apiGardenObjectService.create({ body: this.currentlyEditingObject }).subscribe(
        (data: any) => {
          this.alerts.sendMessage(
            `Created ${this.currentlyEditingObject.name}`
          );
          this.currentlyEditingObject = data;

          // Delete related Suggestion
          const suggestionId = this.route.snapshot.queryParamMap.get(
            "suggestionId"
          );
          if (suggestionId) {
            this.apiGardenSuggestionService
              .deleteById({ id: suggestionId })
              .subscribe();
          }
          this.loadingService.loading = false;
        },
        (err: HttpErrorResponse) => {
          this.loadingService.loading = false;
          this.alerts.sendMessage(err.error.message);
        }
      );
    }
  }

  // public deleteTask(i: number): void {
  //   this.currentlyEditingObject.gardenTasks.splice(i, 1);
  //   this.alerts.sendMessage("Deleted");
  // }

  // public addNewTask(): void {
  //   const newTask = new GardenObjectTask(this.currentlyEditingObject);
  //   this.currentlyEditingObject.gardenTasks.push(newTask);
  //   this.taskOpened = this.currentlyEditingObject.gardenTasks.length - 1;
  // }

  public setOpened(index: number): void {
    this.taskOpened = index;
  }

  public back(): void {
    this.location.back();
  }

  // public sortTasksByDate(i: number = 0): void {
  //   this.currentlyEditingObject.gardenTasks.sort((a: any, b: any) => {
  //     const dateA = new Date(2020, a.month, a.day);
  //     const dateB = new Date(2020, b.month, b.day);
  //     return dateA.getTime() - dateB.getTime();
  //   });
  //   this.setOpened(i);
  // }
}
