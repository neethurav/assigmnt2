import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) {}
    getthelist(){
      return this.http.get('http://localhost:3000/notes');
    
   }
  
}
