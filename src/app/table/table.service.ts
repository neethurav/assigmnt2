import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) {}
    getthelist(){
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    
   }
}
