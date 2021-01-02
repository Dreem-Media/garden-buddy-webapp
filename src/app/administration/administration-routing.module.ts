import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GardenObjectsComponent } from './garden-objects/garden-objects.component';
import { EditGardenObjectComponent } from './garden-objects/edit-garden-object/edit-garden-object.component';
import { UsersComponent } from './users/users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
  {
    path: 'garden-objects',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: GardenObjectsComponent },
      { path: ':garden-object-id', component: EditGardenObjectComponent }
    ]
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    data: { requiresRoles: ['edit-users'] },
    children: [
      { path: '', component: UsersComponent },
      { path: ':user-id', component: EditUsersComponent }
    ]
  },
  {
    path: '',
    redirectTo: '/administration/garden-objects',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
