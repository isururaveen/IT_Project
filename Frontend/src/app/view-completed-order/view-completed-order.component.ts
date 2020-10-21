import { ComplexReport } from './../models/Complex_report';
import { ComplexReportService } from './../services/complex-report.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-completed-order',
  templateUrl: './view-completed-order.component.html',
  styleUrls: ['./view-completed-order.component.scss']
})
export class ViewCompletedOrderComponent implements OnInit {

  orderReport = 'COMPLETED ORDER REPORT';

  id: any ;
  report$: Observable<ComplexReport[]>;
  report: ComplexReport;
  order_id: number;
  driver_id: number;
  delivery_status: string;
  customer_name: string;
  city: string;
  postal_code: number;
  phone_num: number;
  email: string;
  address: string;
  qty: number;
  total: number;
  item_number: number;

  isOpen: false;

  constructor(
    private complexReportService: ComplexReportService,protected activeRoute: ActivatedRoute
    ) {
        this.activeRoute.params.subscribe(data =>{
        this.id= data.id;
        console.log(data)
      })
    }

  ngOnInit(): void {
      this.report$ = this.viewReport();
      this.report$.subscribe((data)=>{
      console.log(data)
      if(data){
        this.report = data[0];
        this.email=this.report.email;
        this.driver_id=this.report.driver_id;
        this.delivery_status=this.report.delivery_status;
        this.customer_name=this.report.customer_name;
        this.postal_code=this.report.postal_code;
        this.phone_num=this.report.phone_num;
        this.address=this.report.address;
        this.total=this.report.total;
        this.qty=this.report.qty;
        this.item_number=this.report.item_number;

      }
    })
  }

  viewReport(): Observable<ComplexReport[]>{
    return this.complexReportService.get(this.id)
  }

  get(): void {
    console.log("hit view")
    this.complexReportService.get(this.id).subscribe((data)=>{
      if(data){
        this.report = data[0];
      }
    });
  }
  
  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }
}
