import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './core/error/error.component';
import { LoginRegisterComponent } from './core/login-register/login-register.component';
import { PasswordResetFormComponent } from './core/password-reset-form/password-reset-form.component';
import { TermsComponent } from './core/terms/terms.component';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },

  { path: 'login', component: LoginRegisterComponent },
  { path: 'reset-password', component: PasswordResetFormComponent },
  { path: 'terms', component: TermsComponent },
  {
    path: 'administration',
    loadChildren: () =>
      import('./administration/administration.module').then(
        (mod) => mod.AdministrationModule
      ),
  },
  {
    path: 'gardens',
    loadChildren: () => import('./gardens/gardens.module').then(m => m.GardensModule),
    canActivate: [AuthGuard]
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
