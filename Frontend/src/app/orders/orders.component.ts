import {Observable} from 'rxjs';

import {Order} from '../models/Order';

import {OrderService} from '../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  order = 'ORDER DETAILS';
  orders = 'NEW DELIVERY ORDERS';

  order$: Observable<Order[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.order$ = this.fetchAll();
  }

  fetchAll(): Observable<Order[]>{
    return this.orderService.fetchAll();
  }

}