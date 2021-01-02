import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';


import { MaterialModules } from '../core/material-modules';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { TruncatePipe } from '../_pipes/truncate.pipe';

@NgModule({
  declarations: [
    UsersComponent,
    EditUsersComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdministrationRoutingModule,

    MaterialModules
  ],
  exports: []
})
export class AdministrationModule { }
