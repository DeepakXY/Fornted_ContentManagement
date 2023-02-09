import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from '../model/contentdata';
import { RegistrationformService } from '../services/registrationform.service';

@Component({
  selector: 'app-viewcontent',
  templateUrl: './viewcontent.component.html',
  styleUrls: ['./viewcontent.component.css']
})
export class ViewcontentComponent {

  constructor(private contentservice:RegistrationformService,private _router:Router) { 
    this.getalldetails();
  }

  content1=new Content();
  ngOnInit(): void
   {
    // this.viewcontx.fetchAllContent().subscribe(
    //   {
    //     next:data=>{this.content1=data;},error:e=>{alert("Something Went Wrong")}
    //   },
    // )
  }
  
  contentdata:any;
  getalldetails(){
    this.contentservice.fetchAllContent().subscribe(
      response=>{

        this.contentdata=response;
        console.log(this.contentdata);
        //this._router.navigate(['/login']) 
});
}
}
