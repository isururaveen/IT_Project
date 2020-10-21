import { ErrorHandlerService } from './error-handler.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, first, tap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

import { CompletedOrder } from '../models/Completed_order';

@Injectable({
  providedIn: 'root'
})
export class CompletedOrderService {

  private url = "http://localhost:3000/completed_order";

  order_id: Pick<CompletedOrder, "order_id">;

  httpOptions : { headers: HttpHeaders } = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  constructor(
    private http: HttpClient, 
    private errorHandlerService: ErrorHandlerService 
  ) { }

  fetchAll(): Observable<CompletedOrder[]> {
    return this.http
    .get<CompletedOrder[]>(this.url, { responseType: "json" })
    .pipe(
      catchError(this.errorHandlerService.handleError<CompletedOrder[]>("fetchAll", [] ))
    );
  }

  delete(id: number): Observable<any> {
    const url = `http://localhost:3000/completed_order/${id}`;

    return this.http
      .delete<CompletedOrder>(url, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));
  }

  get(id: number): Observable<CompletedOrder[]> {
    return this.http
      .get<CompletedOrder[]>(`http://localhost:3000/completed_order/${id}`, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched groceries")),
        catchError(
          this.errorHandlerService.handleError<CompletedOrder[]>("viewReport", [])
        )
      );
  }
}
