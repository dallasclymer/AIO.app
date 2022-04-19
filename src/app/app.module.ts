import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


// Firebase
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from "@angular/fire//compat/firestore";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// App configuration
import { environment } from '../environments/environment';
// import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './modules/shared/guards/auth.guard';
import { AppComponent } from './app.component';

// Thirdy Party Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Application Components
import { HeaderComponent, LeftMenuComponent } from './components/layout'
import { SignInComponent, SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent} from './components/auth'
import { ProgramFilterComponent, ProgramListComponent, ProgramDetailsComponent, ProgramSeriesComponent } from './components/programs'
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './modules/shared/services/auth.service';
import { SharedModule } from './modules/shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent },
  { path: "programs", component: ProgramListComponent, canActivate: [AuthGuard] },
  { path: "programs/:id", component: ProgramDetailsComponent, canActivate: [AuthGuard] },
  {
    path: "leagues",
    loadChildren: () => import('./modules/leagues/leagues.module').then(m => m.LeaguesModule),
    canActivate: [AuthGuard] 
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    ProgramListComponent,
    ProgramDetailsComponent,
    ProgramSeriesComponent,
    ProgramFilterComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    NgbModule,
    SharedModule,
    // FontAwesomeModule
  ],
  exports:[RouterModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
