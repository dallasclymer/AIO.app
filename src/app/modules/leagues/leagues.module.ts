import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { LeagueRoutingModule } from './leagues-routing.module';
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
    // LeagueRoutingModule,
    SharedModule
  ]
})
export class LeaguesModule { }
