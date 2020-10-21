import { OrderInvoiceComponent } from './order-invoice/order-invoice.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { DeliveriesComponent} from './deliveries/deliveries.component';
import { DriversComponent} from './drivers/drivers.component';
import { AssignOrdersComponent} from './assign-orders/assign-orders.component';
import { UpdateAssignOrdersComponent} from './update-assign-orders/update-assign-orders.component';
import { ViewCompletedOrderComponent} from './view-completed-order/view-completed-order.component';
import { ViewOrderReportComponent} from './view-order-report/view-order-report.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'Orders', component: OrdersComponent },
  { path : 'Deliveries', component: DeliveriesComponent },
  { path : 'Drivers', component: DriversComponent},
  { path : 'AssignOrders/:id', component: AssignOrdersComponent},
  { path : 'UpdateAssignOrders/:id', component: UpdateAssignOrdersComponent},
  { path : 'CompletedOrder/:id', component: ViewCompletedOrderComponent},
  { path : 'ViewCompletedOrder/:id', component: ViewCompletedOrderComponent },
  { path : 'ViewOrderReport/:id', component: ViewOrderReportComponent},
  { path : 'ViewInvoice/:id', component: OrderInvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
