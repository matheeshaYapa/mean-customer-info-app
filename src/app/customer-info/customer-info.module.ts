import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInfoRoutingModule } from './customer-info-routing.module';
import { CustomerInfoMainComponent } from './components/customer-info-main/customer-info-main.component';
import { CustomerInfoAddUpdateComponent } from './components/customer-info-add-update/customer-info-add-update.component';
import { CustomerInfoViewComponent } from './components/customer-info-view/customer-info-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CustomerInfoMainComponent, CustomerInfoAddUpdateComponent, CustomerInfoViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomerInfoRoutingModule
  ]
})
export class CustomerInfoModule { }
