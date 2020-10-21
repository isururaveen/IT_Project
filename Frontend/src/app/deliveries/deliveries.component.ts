import { Observable } from 'rxjs';

import { AssignedOrder } from '../models/Assigned_order';
import { CompletedOrder } from './../models/Completed_order';

import { AssignedOrderService } from '../services/assigned-order.service';
import { CompletedOrderService } from '../services/completed-order.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {

  delivery = 'DELIVERIES DETAILS';
  completeOrders = 'COMPLETED ORDERS';
  assignOrders = 'ASSIGNED ORDERS';

  assignorder$: Observable<AssignedOrder[]>;
  completeorder$: Observable<CompletedOrder[]>;

  constructor(
    private assignedOrderService: AssignedOrderService,
    private completedOrderService: CompletedOrderService
    ) { }

  ngOnInit(): void {
    this.assignorder$ = this.fetchAssignedAll();
    this.completeorder$ = this.fetchCompletedAll();
  }

  //View All Assigned Orders
  fetchAssignedAll(): Observable<AssignedOrder[]>{
    return this.assignedOrderService.fetchAll();
  }

  //View All Completed Orders
  fetchCompletedAll(): Observable<CompletedOrder[]>{
    return this.completedOrderService.fetchAll();
  }

  //Delete Assigned Orders
  deleteAssigned(order_id: number): void {
    this.assignorder$ = this.assignedOrderService
      .delete(order_id)
      .pipe(tap(() => (this.assignorder$ = this.fetchAssignedAll())));
      
  }

  //Delete Completed Orders
  deleteCompleted(order_id: number): void {
    this.completeorder$ = this.completedOrderService
      .delete(order_id)
      .pipe(tap(() => (this.completeorder$ = this.fetchCompletedAll())));
  }
  
}
