import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationDetailPageRoutingModule } from './validation-detail-routing.module';

import { ValidationDetailPage } from './validation-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationDetailPageRoutingModule
  ],
  declarations: [ValidationDetailPage]
})
export class ValidationDetailPageModule {}
