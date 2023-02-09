import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FetchviewcontentService } from './services/fetchviewcontent.service';
import { RegistrationformService } from './services/registrationform.service';

@Injectable({
  providedIn: 'root'
})
export class GuradformGuard implements CanActivate {
  constructor(private contentviewservice:RegistrationformService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  if(this.contentviewservice.addSuccess)
  //  {
    return true;
   }
  //  else
  //  {
  //   this.router.navigateByUrl("login")
  //   return false;
  //  }
    // }
}
