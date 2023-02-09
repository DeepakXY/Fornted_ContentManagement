import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from '../model/contentdata';
import { RegistrationformService } from '../services/registrationform.service';

@Component({
  selector: 'app-addcontent',
  templateUrl: './addcontent.component.html',
  styleUrls: ['./addcontent.component.css']
})
export class AddcontentComponent {
  constructor(private addservice:RegistrationformService,private _router:Router) { }
  contentObj1 =new  Content();
fun2(){
  //console.log(this.UserObj.username)
  this.addservice.storContentdata(this.contentObj1).subscribe({
    
    next: () =>{alert("Data Added")
    //this._router.navigate(['/viewcontent']) 
    // if(this.contentObj1.id !==0 && this.contentObj1.contentname !=='' && this.contentObj1.contenttittle !==''){
    // this.addservice.addSuccess=true;
    
    // }
    // else{
    //   this.addservice.addSuccess=false;
    //   alert("faild")
    // }
  },
    
  error(err){alert("error"+err)},
  complete(){alert("comleted")}}
  
  )
}
  

  ngOnInit(): void {
  }
}
