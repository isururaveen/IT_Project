import { ErrorHandlerService } from './error-handler.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = "http://localhost:3000/order";

  order_id: Pick<Order, "order_id">;

  httpOptions : { headers: HttpHeaders } = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }

  fetchAll(): Observable<Order[]> {
    return this.http
    .get<Order[]>(this.url, { responseType: "json" })
    .pipe(
      catchError(this.errorHandlerService.handleError<Order[]>("fetchAll", [] ))
    );
  }

  assign(formData: any, order_id: any): Observable<Order>{
    return this.http
    .put<Order>( this.url,
    formData ,
    this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Order>("assign"))
      );
  }

  get(id: number): Observable<Order> {
    return this.http
      .get<Order>(`http://localhost:3000/order/${id}`, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched")),
        catchError(
          this.errorHandlerService.handleError<Order>("viewReport", null)
        )
      );
  }
}
