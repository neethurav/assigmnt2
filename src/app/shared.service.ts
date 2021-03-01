import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private _persondetails:any={}
  constructor(private http:HttpClient) { }

  set persondetails(personObj:any){
    this._persondetails ={
      name: personObj.name,
      company: personObj.company,
      phone: personObj.phone,
      email:personObj.email,
      _id:personObj._id
    }
 
  }

  get persondetails() {
    return this._persondetails;
  }


  createthelist(input:any){
    console.log(input);
    const Options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        
      })
    }
    //    let body={
    //     name:"gopika",
    //     company: "right",    
    //     phone:"+91 3q433434",
    //     email:"g@gmail.com"
    //    }
   return this.http.post('http://localhost:3000/notes',input,Options);
    
   }

deletemember(deleteid:string){
 return this.http.delete('http://localhost:3000/notes/'+deleteid)

}


updatemember(input:any){
  console.log("--------",input,this._persondetails._id);
// return {"status":"200"};
  // this.http.put('http://localhost:3000/notes/'+ this._persondetails._id,input)
}
}
