import {Observable} from 'rxjs';

import { Driver } from '../models/Driver';

import { DriverService } from './../services/driver.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  driver = 'DELIVERY DRIVER DETAILS';

  driver$: Observable<Driver[]>;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.driver$ = this.fetchAll();
  }

  fetchAll(): Observable<Driver[]>{
    return this.driverService.fetchAll();
  }
}
