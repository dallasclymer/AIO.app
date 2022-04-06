import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from "@angular/fire//compat/firestore";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AuthService } from '../../shared/services/auth.service';
import { environment } from '../../../environments/environment';



import { 
  DashboardComponent,
  DetailsComponent
} from './components/index'

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DashboardComponent,
  },
  {
    path: ":id",
    component: DetailsComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService]
})
export class TeamModule { }
