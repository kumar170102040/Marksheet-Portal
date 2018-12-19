import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  TableData: any = [];
  public maxMarks: any = [];
  ShowEditTable: boolean = false;
  EditRowID: any ='';
  constructor(){
    this.TableData =
    [
    {id: 1 ,registrationNo: '11029032' , criterion1: '6' , criterion2: '9', criterion3: '9', criterion4: '9' ,criterion5: '9',criterion6: '9'},
    {id: 2 ,registrationNo: '11029033' , criterion1: '7' , criterion2: '8', criterion3: '8', criterion4: '9' ,criterion5: '9',criterion6: '9'},
    {id: 3 ,registrationNo: '11029034' , criterion1: '7' , criterion2: '8', criterion3: '7', criterion4: '9' ,criterion5: '9',criterion6: '9'},
    {id: 4 ,registrationNo: '11029035' , criterion1: '8' , criterion2: '5', criterion3: '10', criterion4: '9' ,criterion5: '9',criterion6: '9'},
    ];

    this.maxMarks ={
        mm1:10, 
        mm2:10, 
        mm3:10, 
        mm4:10, 
        mm5:10,
    }
  }
  Edit(val){
    this.EditRowID = val;
  }
  /*******this part is still under work**********/
  /*method to add columns********/
  /*add_col(){
    $("thead").append("<th>Criterion-5</th>");
    $("tr").append(`
          <td *ngIf = "user.id === EditRowID" ><input type="text" [(ngModel)]="user.criterion7"></td>
          <td *ngIf = "user.id !== EditRowID" (click)="Edit(user.id)">--</td>         
        `);
   }*/
   
}
