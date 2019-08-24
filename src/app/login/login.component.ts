import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;
  number :number;

  months = ["January", "Feburary", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];

  constructor(private loginService:LoginServiceService) { 
 
  setInterval(()=>{
  let date = new Date();
  this.message =date.toDateString() +" " +date.toLocaleTimeString().toString();},
  1000);
 
  }

  ngOnInit() {
  
  }

  login(){
    this.loginService.helloConsole();
  }

}
