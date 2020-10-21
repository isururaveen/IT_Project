import { ErrorHandlerService } from './error-handler.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, first } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

import { Driver } from '../models/Driver'

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private url = "http://localhost:3000/driver";

  employee_id: Pick<Driver, "employee_id">;

  httpOptions : { headers: HttpHeaders } = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  constructor(
    private http: HttpClient, 
    private errorHandlerService: ErrorHandlerService 
    ) { }

    
  fetchAll(): Observable<Driver[]> {
    return this.http
    .get<Driver[]>(this.url, { responseType: "json" })
    .pipe(
      catchError(this.errorHandlerService.handleError<Driver[]>("fetchAll", [] ))
    );
  }
}
