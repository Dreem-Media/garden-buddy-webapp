import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { User, typesOfRoles } from "src/app/_models/user";
import { AlertsService } from "src/app/_services/alerts.service";
import { UserService } from "src/app/_services/user.service";

@Component({
  selector: "app-edit-users",
  templateUrl: "./edit-users.component.html",
})
export class EditUsersComponent implements OnInit {
  public currentlyEditing!: User;
  public typesOfRoles = typesOfRoles;

  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private location: Location,
    private alerts: AlertsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("user-id");
    if (id){
      if (id === "new") {
        this.currentlyEditing = new User();
      } else {
        this.service
          .getUserById(id)
          .subscribe((data: User) => (this.currentlyEditing = data));
      }
    }
  }

  saveCurrentlyEditing(): void {
    if (this.currentlyEditing.id) {
      this.service
        .updateUserById(this.currentlyEditing.id, this.currentlyEditing)
        .subscribe(() => {
          this.alerts.sendMessage("Deleted");
        });
    } else {
      this.service.createUser(this.currentlyEditing).subscribe((data: User) => {
        this.alerts.sendMessage("Deleted");
        this.currentlyEditing = data;
      });
    }
  }

  back(): void {
    this.location.back();
  }
}
