import { Order } from './../models/Order';
import { OrderService } from './../services/order.service';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-assign-orders',
  templateUrl: './assign-orders.component.html',
  styleUrls: ['./assign-orders.component.scss']
})
export class AssignOrdersComponent implements OnInit {

  id: any ;
  order$: Observable<Order>;
  order: Order;

  @ViewChild('formDirective') formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();

  assignForm: FormGroup;
  showMsg: boolean = false;

  isOpen = false;

  availableDrivers = 'AVAILABLE DELIVERY DRIVERS';

  constructor(
    private orderService: OrderService, protected activeRoute: ActivatedRoute
    ) {
        this.activeRoute.params.subscribe(data =>{
        this.id= data.id;
      })
    }

  ngOnInit(): void {
    this.assignForm = this.createFormGroup();
    this.get();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      order_id: new FormControl ('', [Validators.required]),
      driver_id: new FormControl ('', [Validators.required]),
      assign_date: new FormControl ('', [Validators.required]),
      status: new FormControl ('', [Validators.required]),
    });
  }

  assign(formData:
    Pick<Order, "order_id" | "driver_id" | "assigned_date" | "delivery_status">): void {
    console.log(formData);
    this.create.emit(null);
    this.orderService.assign(this.order, formData.order_id).subscribe((data)=>{});
    this.showMsg= true;
  }

  get(): void {
    this.orderService.get(this.id).subscribe((data)=>{
      if(data){this.order = data[0];}
    });
  }
}
