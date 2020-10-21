import { AssignedOrderService } from './../services/assigned-order.service';
import { AssignedOrder } from './../models/Assigned_order';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-update-assign-orders',
  templateUrl: './update-assign-orders.component.html',
  styleUrls: ['./update-assign-orders.component.scss']
})
export class UpdateAssignOrdersComponent implements OnInit {
  id: any ;
  order$: Observable<Order>;
  order: Order;
  
  showMsg: boolean = false;

  @ViewChild('formDirective') formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();

  updateForm: FormGroup;

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
    this.updateForm = this.createFormGroup();
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
