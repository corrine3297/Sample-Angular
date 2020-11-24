import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Email:string="admin@gmail.com";
  Password:string="abc";


  constructor(public router:Router) 
  {

   }

  ngOnInit(): void {
  }
  loginUser(){
    if(this.Email=="admin@gmail.com" && this.Password=="abc")
    {
      console.log("welcome");
      this.router.navigate(['/dashboard'])
      
    }
    else{
      alert("sorry incorrect Username Password")
    }
  }

}
