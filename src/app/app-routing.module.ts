import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ProtectedViewComponent } from './components/protected-view/protected-view.component';

import { MapComponent } from './components/map/map.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'app', component: ProtectedViewComponent, canActivate: [AuthGuard] },

  { path: 'home', component: HomeComponent },
  // {
  //   path: "",
  //   pathMatch: "full",
  //   redirectTo: "my-group",
  // },
  {
    path: "register",
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule),
    canActivate: [AuthGuard] 
  },
  {
    path: "my-group",
    loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule),
    canActivate: [AuthGuard] 
  },
  {
    path: "upcoming-activities",
    loadChildren: () => import('./modules/activities/activities.module').then(m => m.ActivitiesModule)
  },
  {
    path: "my-team",
    loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule),
    canActivate: [AuthGuard] 
  },
  {
    path: "billing",
    loadChildren: () => import('./modules/billing/billing.module').then(m => m.BillingModule),
    canActivate: [AuthGuard] 
  },
  {
    path: "manage",
    loadChildren: () => import('./modules/management/management.module').then(m => m.ManagementModule),
    canActivate: [AuthGuard] 
  },
  {
    path: "map",
    component: MapComponent,
    canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
