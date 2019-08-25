import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseURl:String ='http://localhost:8080'

  constructor(private http:HttpClient) { }
  
  getAllUser():Observable<any>{
   
   return this.http.get(this.baseURl +'/users');

  }

}
