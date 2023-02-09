import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User1 } from '../model/Userdata';
import { RegistrationformService } from '../services/registrationform.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private studentformService:RegistrationformService,private _router :Router ) { }
  UserObj=new User1()
  

fun1(){
  console.log(this.UserObj.username)
  
  this.studentformService.stordata(this.UserObj).subscribe({
    
    next: () =>{alert("Data Added"),
    this._router.navigate(['/login']) 
  },
    
  error(err){alert("error"+err)},
  complete(){alert("comleted")}}
  
  )
}
  

  ngOnInit(): void {
  // localStorage.setItem("Email")
  }
  
  
  // registrationForm=new FormGroup({
  //   useremail:new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]),
  //   passwd:new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]),
  //   username:new FormControl()

  // });

  // const email = document.querySelector('#email');
  // const submit=document.querySelector('#submit');
  
  // submit.addEventListener('click',()=>{
  //     if(useremail.validity.typeMismatch){
  //       useremail.setCustomValidity('Please enter correct email');
  //     }else{
  //         email.setCustomValidity('');
  //     }
  // })

}
