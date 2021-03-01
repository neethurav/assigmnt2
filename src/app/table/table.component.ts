import { Component} from '@angular/core';
import { TableService } from './table.service';

import { SharedService } from '../shared.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  person: any = {};
  members?:any;
  member?:any;
  neethu?:any;
  name?:string;
  company?:string;
  phone?:any;
  email?:any;
  

  constructor(private memberService: TableService,private sharedService:SharedService ){
   
    memberService.getthelist().subscribe(
      (data) => {
        console.log(data);
        this.members = data;
      }
      );
   }
   sendtochild(member:any){
   ;
    console.log(member);

    
      
this.person={
  name:member.name,
  company:member.company,
  phone:member.phone,
 email:member.email,
 _id:member._id
}
console.log(this.person);
       this.sharedService.persondetails=this.person;
        
}
childClicked(input:any){
  console.log("parent:","from child event raised",input)
  //make a call to backend(post request)
  this.members.push(input);
}
deletemember(deleteid:string){
this.sharedService.deletemember(deleteid).subscribe(
   (data) => {
   this.memberService.getthelist().subscribe(
      (data) => {
        this.members = data;
      }
      );
  
});


}

}
