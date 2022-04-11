import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from "@angular/fire//compat/firestore";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// App configuration
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Thirdy Party Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// App Layout
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

// Route Components
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { HomeComponent } from './components/home/home.component';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { ProgramSeriesComponent } from './components/program-series/program-series.component';
import { ProgramFilterComponent } from './components/program-filter/program-filter.component';

import { AuthService } from './modules/shared/services/auth.service';
import { SharedModule } from './modules/shared/shared.module';

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
    NgbModule,
    SharedModule,
    AppRoutingModule,
    // FontAwesomeModule
  ],
  exports:[AppRoutingModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
