import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";

import { ErrorHandlerService } from "./error-handler.service";

import { ComplexReport } from '../models/Complex_report';

@Injectable({
  providedIn: 'root'
})
export class ComplexReportService {
  
  private url = "http://localhost:3000/complex_report";

  order_id: Pick<ComplexReport, "order_id">;

  httpOptions : { headers: HttpHeaders } = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  constructor (
    private http: HttpClient, 
    private errorHandlerService: ErrorHandlerService 
    ) { }

    fetchAll(): Observable<ComplexReport[]> {
      return this.http
        .get<ComplexReport[]>(this.url, { responseType: "json" })
        .pipe(
          tap((_) => console.log("fetched")),
          catchError(
            this.errorHandlerService.handleError<ComplexReport[]>("fetchAll", [])
          )
        );
    }

    get(id): Observable<ComplexReport[]> {
      return this.http
        .get<ComplexReport[]>(this.url+"/"+id, { responseType: "json" })
        .pipe(
          tap((_) => console.log("fetched")),
          catchError(
            this.errorHandlerService.handleError<ComplexReport[]>("fetchAll", [])
          )
        );
    }
}
