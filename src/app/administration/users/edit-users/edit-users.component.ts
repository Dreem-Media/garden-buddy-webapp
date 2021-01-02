import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AlertsService } from 'src/app/_services/alerts.service';
import { typesOfRoles } from 'src/app/types-of-roles';
import { User } from 'src/app/api/models/user';
import { UserManagementControllerService } from 'src/app/api/services';
import { NewUser } from 'src/app/api/models/new-user';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
})
export class EditUsersComponent implements OnInit {
  public currentlyEditing!: NewUser;
  public typesOfRoles = typesOfRoles;

  constructor(
    private route: ActivatedRoute,
    private apiUserService: UserManagementControllerService,
    private location: Location,
    private alerts: AlertsService
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('user-id');
    if (userId) {
      if (userId === 'new') {
        this.currentlyEditing = new NewUser();
      } else {
        this.apiUserService
          .findById({ userId })
          .subscribe((data: User) => (this.currentlyEditing = data as NewUser));
      }
    }
  }

  saveCurrentlyEditing(): void {
    if (this.currentlyEditing.id) {
      const params = {
        userId: this.currentlyEditing.id,
        body: this.currentlyEditing,
      };
      this.apiUserService.set(params).subscribe(() => {
        this.alerts.sendMessage('Saved');
      });
    } else {
      this.apiUserService
        .create({ body: this.currentlyEditing as NewUser })
        .subscribe((data: User) => {
          this.alerts.sendMessage('Created');
          this.currentlyEditing = data as NewUser;
        });
    }
  }

  back(): void {
    this.location.back();
  }
}
