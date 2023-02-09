import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User1 } from '../model/Userdata';
import { RegistrationformService } from '../services/registrationform.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userObj =new User1

  constructor(private _service :RegistrationformService,  private _router :Router) { }

  ngOnInit(): void {
  }
 loginUser(){
this._service.loginUserFormRemote(this.userObj).subscribe({

  
  next: () =>
    
  {alert("successfully logging"),
  this._router.navigate(['/addcontent']) 
localStorage.setItem('email',this.userObj.useremail);
alert(localStorage.getItem('email'))
},

  error(err){alert("error"+err)},
  complete(){alert("comleted")}},
  
)
  }
  gotoregistration(){
    this._router.navigate(['/registration']) 
  }
 
  
 }

  

