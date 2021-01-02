import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
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
