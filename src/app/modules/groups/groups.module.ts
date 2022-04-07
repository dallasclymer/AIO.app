import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from '../shared/shared.module';

import { 
  DashboardComponent,
  DetailsComponent
} from './components/index'

// const routes: Routes = [
//   {
//     path: "",
//     pathMatch: "full",
//     component: DashboardComponent,
//   },
//   {
//     path: ":id",
//     component: DetailsComponent,
//   },
// ];

@NgModule({
  declarations: [
    DashboardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    // RouterModule.forChild(routes)
  ]
})
export class GroupsModule { }
