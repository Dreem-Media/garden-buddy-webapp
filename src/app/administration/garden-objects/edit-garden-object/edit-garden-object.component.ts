import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import {
  GardenObject,
  monthDefinitions,
  dayDefinitions,
} from "src/app/_models/garden-object";
import { GardenObjectTask } from "src/app/_models/garden-object-task";
import { AlertsService } from "src/app/_services/alerts.service";
import { GardenObjectsService } from "src/app/_services/garden-objects.service";
import { SuggestionsService } from "src/app/_services/suggestions.service";
import { LoadingService } from "src/app/_services/loading.service";
import { HttpErrorResponse } from "@angular/common/http";

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
    private service: GardenObjectsService,
    private suggestionsService: SuggestionsService,
    private location: Location,
    private alerts: AlertsService,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("garden-object-id");
    if (id) {
      if (id === "new") {
        this.currentlyEditingObject = new GardenObject();
        let title = this.route.snapshot.queryParamMap.get("title");
        if (title) {
          this.currentlyEditingObject.title = title;
        }
      } else {
        this.service.getGardenObjectById(id).subscribe((data: GardenObject) => {
          this.currentlyEditingObject = data;
        });
      }
    }
  }

  saveCurrentlyEditing(): void {
    this.loadingService.loading = true;
    this.sortTasksByDate();
    if (this.currentlyEditingObject.id) {
      // Update existing
      this.service
        .updateGardenObjectById(
          this.currentlyEditingObject.id,
          this.currentlyEditingObject
        )
        .subscribe(
          () => {
            this.alerts.sendMessage(
              `Updated ${this.currentlyEditingObject.title}`
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
      this.service.createGardenObject(this.currentlyEditingObject).subscribe(
        (data) => {
          this.alerts.sendMessage(
            `Created ${this.currentlyEditingObject.title}`
          );
          this.currentlyEditingObject = data;

          // Delete related Suggestion
          const suggestionId = this.route.snapshot.queryParamMap.get(
            "suggestionId"
          );
          if (suggestionId) {
            this.suggestionsService
              .deleteSuggestionById(suggestionId)
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

  public deleteTask(i: number): void {
    this.currentlyEditingObject.gardenTasks.splice(i, 1);
    this.alerts.sendMessage("Deleted");
  }

  public addNewTask(): void {
    const newTask = new GardenObjectTask(this.currentlyEditingObject);
    this.currentlyEditingObject.gardenTasks.push(newTask);
    this.taskOpened = this.currentlyEditingObject.gardenTasks.length - 1;
  }

  public setOpened(index: number): void {
    this.taskOpened = index;
  }

  public back(): void {
    this.location.back();
  }

  public sortTasksByDate(i: number = 0): void {
    this.currentlyEditingObject.gardenTasks.sort((a, b) => {
      const dateA = new Date(2020, a.month, a.day);
      const dateB = new Date(2020, b.month, b.day);
      return dateA.getTime() - dateB.getTime();
    });
    this.setOpened(i);
  }
}
