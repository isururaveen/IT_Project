import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";

import { ErrorHandlerService } from "./error-handler.service";

import { AssignedOrder } from '../models/Assigned_order';

@Injectable({
  providedIn: 'root'
})
export class AssignedOrderService {

  private url = "http://localhost:3000/assigned_order";

  order_id: Pick<AssignedOrder, "order_id">;

  httpOptions : { headers: HttpHeaders } = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),

  };

  constructor(    
    private http: HttpClient, 
    private errorHandlerService: ErrorHandlerService 
    ) { }
        
  fetchAll(): Observable<AssignedOrder[]> {
    return this.http
      .get<AssignedOrder[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched")),
        catchError(
          this.errorHandlerService.handleError<AssignedOrder[]>("fetchAll", [])
        )
      );
  }

  get(id): Observable<AssignedOrder[]> {
    return this.http
      .get<AssignedOrder[]>(this.url+"/"+id, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched")),
        catchError(
          this.errorHandlerService.handleError<AssignedOrder[]>("fetchAll", [])
        )
      );
  }

  post(item: Partial<AssignedOrder>): Observable<any> {
    return this.http
      .post<Partial<AssignedOrder>>(this.url, item, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
  }

  update(formData: any, order_id: any): Observable<AssignedOrder>{
    return this.http
    .put<AssignedOrder>( this.url,
    formData ,
    this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<AssignedOrder>("update"))
      );
  }

  delete(id: number): Observable<any> {
    const url = `http://localhost:3000/assigned_order/${id}`;

    return this.http
      .delete<AssignedOrder>(url, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));
  }
}
