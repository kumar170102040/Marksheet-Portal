import { Component , OnInit } from '@angular/core';
import { FormBuilder , FormArray , FormControl , FormGroup , FormGroupName } from '@angular/forms';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  tableForm: FormGroup;
  tableForm2: FormGroup;
  public N = 5;
  TableData: any = [];
  public maxMarks: any = [];
  ShowEditTable: boolean = false;
  EditRowID: any ='';
  constructor(private fb: FormBuilder){

    this.tableForm = this.fb.group({
      registrationNo: new FormControl({value:'', disabled : true}), 

      criterion1: [''],
      OtherCriterion: this.fb.array([]),
    });

    this.tableForm2 = this.fb.group({
      registrationNo: new FormControl({value:'', disabled : true}), 

      criterion1: [''],
      OtherCriterion2: this.fb.array([]),
    });

    this.maxMarks ={
        mm1:10, 
        mm2:10, 
        mm3:10, 
        mm4:10, 
        mm5:10,
    }
  }
  get registrationNo() {
    return this.tableForm.get('registrationNo');
  }

  get criterion1() {
    return this.tableForm.get('criterion1');
  }

  
  get OtherCriterion(){
    return this.tableForm.get('OtherCriterion') as FormArray;
  }
  get OtherCriterion2(){
    return this.tableForm.get('OtherCriterion2') as FormArray;
  }

  
  addCriterion() {
    this.OtherCriterion.push(this.fb.control(''));
    this.OtherCriterion2.push(this.fb.control(''));
  }

  Edit(val){
    this.EditRowID = val;
  }

  loadAPIData() {
    this.tableForm.patchValue({
      registrationNo: 'Bruce',
      criterion1:'0'
    });
    this.tableForm2.patchValue({
      registrationNo: 'Siddharth',
      criterion1:'10'
    });
  }
   
}