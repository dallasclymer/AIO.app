import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AvatarModule } from 'ngx-avatar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthService } from './services/auth.service';

import { 
  CardComponent,
  TableComponent,
  TeamBannerComponent,
  ContentTabsComponent
} from './components/index';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    ContentTabsComponent,
    TeamBannerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule,
    AvatarModule
  ],
  exports: [
    // AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    TableComponent,
    CardComponent,
    ContentTabsComponent,
    TeamBannerComponent
  ],
  providers: [AuthService]

})
export class SharedModule { 

}
