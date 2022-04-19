import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LeagueListComponent, LeagueDetailsComponent } from './components';
import { SharedModule } from '../shared/shared.module';

const leaguesRoutes: Routes = [
  { path: "", component: LeagueListComponent},
  { path: ":id", component: LeagueDetailsComponent },
];

@NgModule({
  declarations: [
    LeagueListComponent,
    LeagueDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(leaguesRoutes),
    SharedModule
  ]
})
export class LeaguesModule { }
