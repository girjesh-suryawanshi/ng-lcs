import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;
  number :number;

  constructor() { 
  let date = new Date();
  setInterval(()=>{
  this.message =date.getDate().toLocaleString() +" " +date.toLocaleTimeString().toString();},
  1000);

  
  
  }

  ngOnInit() {
  }

}
