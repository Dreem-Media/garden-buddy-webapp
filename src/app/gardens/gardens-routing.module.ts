import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GardenResolver } from './garden.resolver';
import { GardenOverviewComponent } from './garden-overview/garden-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mine',
    pathMatch: 'full'
  },
  {
    path: 'mine',
    component: GardenOverviewComponent,
    resolve: {
      garden: GardenResolver
    }
  },
  {
    path: ':id',
    component: GardenOverviewComponent,
    resolve: {
      garden: GardenResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GardensRoutingModule { }
