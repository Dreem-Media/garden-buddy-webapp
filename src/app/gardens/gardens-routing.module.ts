import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyGardenComponent } from './my-garden/my-garden.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mine',
    pathMatch: 'full'
  },
  { path: 'mine', component: MyGardenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GardensRoutingModule { }
