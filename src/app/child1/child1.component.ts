import { Component,OnInit,  OnChanges ,ViewChild,Output,EventEmitter} from '@angular/core';
import { SharedService } from '../shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnChanges {
  @Output() aClick = new EventEmitter();
  @ViewChild('empForm') neethuForm ?: NgForm;
  empForm?:any;
  complexObject?:any;


  person:any;
  constructor(private sharedService:SharedService) {
    
   
   }


   ngOnInit() {
   
this.person=this.sharedService.persondetails;



  }
  ngOnChanges() {
    // console.log("Onchange",this.sharedService.persondetails);
    this.person=this.sharedService.persondetails;
  }

 
  
  getfromservice(){
   
    // console.log("sampletext",this.sharedService.persondetails);
    this.person=this.sharedService.persondetails;
    
  }
    
    onSubmit() {
    // console.log(this.neethuForm?.form.value);
    this.complexObject=this.neethuForm?.form.value;
// console.log(this.complexObject);

    console.log("Child: ",' link clicked value is :',this.complexObject)

    this.aClick.emit(this.complexObject);
 
  }

}
