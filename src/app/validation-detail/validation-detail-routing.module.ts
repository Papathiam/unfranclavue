import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationDetailPage } from './validation-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationDetailPageRoutingModule {}
