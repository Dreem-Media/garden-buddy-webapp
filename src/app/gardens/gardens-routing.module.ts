import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GardenResolver } from './garden.resolver';
import { MyGardenComponent } from './my-garden/my-garden.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mine',
    pathMatch: 'full'
  },
  {
    path: 'mine',
    component: MyGardenComponent,
    resolve: {
      garden: GardenResolver
    }
  },
  {
    path: ':id',
    component: MyGardenComponent,
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
