import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GardensRoutingModule } from './gardens-routing.module';
import { MyGardenComponent } from './my-garden/my-garden.component';
import { MaterialModules } from '../core/material-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MyGardenComponent],
  imports: [
    CommonModule,
    GardensRoutingModule,
    MaterialModules,

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GardensModule { }
