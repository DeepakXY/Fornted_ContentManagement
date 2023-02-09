import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FetchviewcontentService {

  constructor(private routerService: Router) { }
 fetchcontent: boolean = false;

  fetch() {
    this.fetchcontent = true;
   
  }
  fetchview() {
    this.routerService.navigate(["viewcontent"]);
  }

}
