import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';

import { AvatarModule } from 'ngx-avatar';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    FontAwesomeModule,
    TableComponent,
    CardComponent,
    ContentTabsComponent,
    TeamBannerComponent
  ]

})
export class SharedModule { 

}
