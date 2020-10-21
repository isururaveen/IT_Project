import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SideNvaBarComponent } from './side-nva-bar/side-nva-bar.component';
import { OrdersComponent } from './orders/orders.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { DriversComponent } from './drivers/drivers.component';
import { HomeComponent } from './home/home.component';
import { AssignOrdersComponent } from './assign-orders/assign-orders.component';
import { UpdateAssignOrdersComponent } from './update-assign-orders/update-assign-orders.component';
import { ViewOrderReportComponent } from './view-order-report/view-order-report.component';
import { ViewCompletedOrderComponent } from './view-completed-order/view-completed-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNvaBarComponent,
    OrdersComponent,
    DeliveriesComponent,
    DriversComponent,
    HomeComponent,
    AssignOrdersComponent,
    UpdateAssignOrdersComponent,
    ViewOrderReportComponent,
    ViewCompletedOrderComponent,
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
