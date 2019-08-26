import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseURl:String ='http://localhost:8080'

  constructor(private http:HttpClient) { }

  loginAuthentication(users:any):Observable<any>{
    return this.http.post(this.baseURl+'/login',users,{observe:'response'}).pipe(map((response:HttpResponse<any>)=>{
      return response;
    }));

  }

  getAllUsers():Observable<any>{
    return this.http.get(this.baseURl+'/users',{observe:'response'})

  }
}
