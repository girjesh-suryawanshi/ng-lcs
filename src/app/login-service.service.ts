import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  helloConsole(status:any){
    console.log("Welcome to service");
  }

}
