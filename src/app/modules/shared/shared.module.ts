import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';

import { AvatarModule } from 'ngx-avatar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthService } from './services/auth.service';

import {
  CardComponent,
  LongCardComponent,
  TableComponent,
  TeamBannerComponent,
  ContentTabsComponent,
  GoogleMapComponent,
} from './components/index';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    ContentTabsComponent,
    TeamBannerComponent,
    LongCardComponent,
    GoogleMapComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    GoogleMapsModule,
    AvatarModule,
  ],
  exports: [
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    TableComponent,
    CardComponent,
    ContentTabsComponent,
    TeamBannerComponent,
    LongCardComponent,
    GoogleMapComponent,
  ],
  providers: [AuthService],
})
export class SharedModule {}
