import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeagueListComponent, LeagueDetailsComponent } from './components'

const leaguesRoutes: Routes = [
  { path: "", component: LeagueListComponent},
  { path: ":id", component: LeagueDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(leaguesRoutes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
