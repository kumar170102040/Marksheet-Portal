import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  TableData: any = [];
  ShowEditTable: boolean = false;
  EditRowID: any ='';
  constructor(){
    this.TableData =[ 
    {id: 1 ,registrationNo: '11029032' , criterion1: '5' , criterion2: '9', criterion3: '9'},
    {id: 2 ,registrationNo: '11029033' , criterion1: '7' , criterion2: '8', criterion3: '8'},
    {id: 3 ,registrationNo: '11029034' , criterion1: '7' , criterion2: '8', criterion3: '7'},
    {id: 4 ,registrationNo: '11029035' , criterion1: '8' , criterion2: '5', criterion3: '10'},
  ];


  }
  Edit(val){
    this.EditRowID = val;
  }
}
