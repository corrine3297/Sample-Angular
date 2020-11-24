import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  public url ="http://dummy.restapiexample.com/api/v1/employees"
  constructor(public http:HttpClient) {

  }

   public getData():Observable<any>{
     return this.http.get<any>(this.url)
   }

}
