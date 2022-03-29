import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "my-group",
  },
  {
    path: "my-group",
    loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule)
  },
  {
    path: "upcoming-activities",
    loadChildren: () => import('./modules/activities/activities.module').then(m => m.ActivitiesModule)
  },
  {
    path: "my-team",
    loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule)
  },
  {
    path: "billing",
    loadChildren: () => import('./modules/billing/billing.module').then(m => m.BillingModule)
  },
  {
    path: "manage",
    loadChildren: () => import('./modules/management/management.module').then(m => m.ManagementModule)
  },
  {
    path: "map",
    component: MapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
