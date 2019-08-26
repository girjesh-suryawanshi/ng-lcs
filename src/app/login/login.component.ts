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
  users:any;

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
   this.getAll();
   this.users={};
  }

  getAll(){
   console.log("Getting user");
   this.loginService.getAllUsers().subscribe(success=>{
    console.log("inside success");
    console.log(success);
    if(success.status == 200){
      
    }

   },error=>{
    console.log("inside error");
   })
   
  }
   
  onClickLogin(){

    this.loginService.loginAuthentication(this.users).subscribe(success=>{},error=>{})

  }


  
}
