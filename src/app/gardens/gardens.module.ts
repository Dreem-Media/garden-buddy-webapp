import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GardensRoutingModule } from './gardens-routing.module';
import { GardenOverviewComponent } from './garden-overview/garden-overview.component';
import { MaterialModules } from '../core/material-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GardenOverviewComponent],
  imports: [
    CommonModule,
    GardensRoutingModule,
    MaterialModules,

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GardensModule { }
