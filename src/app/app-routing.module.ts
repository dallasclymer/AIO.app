import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { HomeComponent } from './components/home/home.component';
import { ProgramListComponent } from './components/program-list/program-list.component';

import { AuthGuard } from './modules/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent },
  { path: "programs", component: ProgramListComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
