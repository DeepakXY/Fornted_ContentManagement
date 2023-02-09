import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../model/contentdata';
import { User1 } from '../model/Userdata';
@Injectable({
  providedIn: 'root'
})
export class RegistrationformService {

  addSuccess:boolean=false;
  constructor(private _http:HttpClient){}
  public loginUserFormRemote(userdata :User1):Observable<any> {
    return this._http.post<any>("http://localhost:8082/user/v1/login",userdata);
    console.log(userdata)
  }
  
  
  stordata(data1:User1){
    console.log(data1);
return this._http.post("http://localhost:8085/api/v2/register",data1);
  }
  storContentdata(data3:Content){
    // let data3=JSON.stringify(data2.value)
    console.log(data3);
  //  var formdata:any=new FormData();
  //  formdata.append('id',data2.get(" id ")?.value);
  //  formdata.append('contentname',data2.get("contentname")?.value);
  //  formdata.append('contenttittle',data2.get("contenttittle")?.value);


return this._http.post("http://localhost:8085/api/v2/add/"+localStorage.getItem('email'),data3);
  }

public  fetchAllContent():Observable<Content>{
  return this._http.get<Content>("http://localhost:8085/api/v2/get/"+localStorage.getItem('email'));

 }
 
}
