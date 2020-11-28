import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerInfoAddUpdateComponent } from './components/customer-info-add-update/customer-info-add-update.component';
import { CustomerInfoMainComponent } from './components/customer-info-main/customer-info-main.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerInfoMainComponent
  },
  {
    path: 'add',
    component: CustomerInfoAddUpdateComponent
  },
  {
    path: 'update/:customerId',
    component: CustomerInfoAddUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerInfoRoutingModule { }
