import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 message:string ;

 number:number=4;

 userName:string;
  

 constructor(private loginservice:LoginServiceService){

  setInterval(()=>{
    let date = new Date();

    this.message = date.toLocaleDateString() +" " + date.toLocaleTimeString()  },1000)
  
 }

  ngOnInit() {
  
  }

  binding(){
    console.log("binding click");
   this.loginservice.getAllUser().subscribe(success=>{
     console.log("inside success");
     console.log(success);
   },error=>{})
  }

  
}
