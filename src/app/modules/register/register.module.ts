import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { 
  LandingComponent,
  DetailsComponent
} from './components/index'

// const routes: Routes = [
//   {
//     path: "",
//     pathMatch: "full",
//     component: LandingComponent,
//   },
//   {
//     path: ":registrationChoice",
//     component: DetailsComponent,
//   },
// ];

@NgModule({
  declarations: [
    LandingComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    // RouterModule.forChild(routes),
  ]
})
export class RegisterModule { }