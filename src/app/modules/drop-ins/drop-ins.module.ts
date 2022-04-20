import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DropInDashboardComponent } from './components';
import { SharedModule } from '../shared/shared.module';

const dropInsRoutes: Routes = [
  { path: '', component: DropInDashboardComponent },
];

@NgModule({
  declarations: [DropInDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(dropInsRoutes), SharedModule],
})
export class DropInsModule {}
