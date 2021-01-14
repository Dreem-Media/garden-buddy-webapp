import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GardensRoutingModule } from './gardens-routing.module';
import { MyGardenComponent } from './my-garden/my-garden.component';


@NgModule({
  declarations: [MyGardenComponent],
  imports: [
    CommonModule,
    GardensRoutingModule
  ]
})
export class GardensModule { }
