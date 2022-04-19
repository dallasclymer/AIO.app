import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProgramFilterComponent, ProgramDetailsComponent, ProgramListComponent, ProgramSeriesComponent } from './components';
import { SharedModule } from '../shared/shared.module';

const leaguesRoutes: Routes = [
  { path: "", component: ProgramListComponent},
  { path: ":id", component: ProgramDetailsComponent },
];

@NgModule({
  declarations: [
    ProgramFilterComponent,
    ProgramDetailsComponent,
    ProgramListComponent,
    ProgramSeriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(leaguesRoutes),
    SharedModule
  ]
})
export class ProgramsModule { }
