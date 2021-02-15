import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private _persondetails:any={}
  constructor() { }

  set persondetails(personObj:any){
    this._persondetails ={
      name: personObj.name,
      company: personObj.company,
      phone: personObj.phone,
      email:personObj.email
    }
 
  }

  get persondetails() {
    return this._persondetails;
  }

}
