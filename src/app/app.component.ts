import { Component, OnInit ,OnDestroy} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from './data.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit{
    public myForm: FormGroup;
    public totalCriteria = 1;
    public errorMsg;
    EditRowId: any ='';
    public i:number = 0;

    public criteria_data = [];
    public participant_data=[];
    
    constructor(private fb: FormBuilder , private _dataservice : DataService) {
      // console.log(this.i + "c");
      // this.i = this.i +1;
      // console.log(this.i + "c");

    }

    ngOnInit() {
        this._dataservice.getParticipant()
        .subscribe(data => this.participant_data = data);
        this._dataservice.getCriteria()
        .subscribe(data => this.criteria_data = data,
                   error => this.errorMsg = error);
        // console.log(this.participant_data);
        // console.log(this.criteria_data);

        // console.log(this.i + "i");
        // this.i = this.i +1;
        // console.log(this.i + "i");
        var arr = [];
        for(var i = 0; i < this.participant_data.length; i++){
          arr.push(this.buildParticipant(this.participant_data[i] , i));
        }
        this.myForm = this.fb.group({
            participants: this.fb.array(arr)
        });
        
      }
    loadApidata(){
        // this.i = this.i +1;
        // console.log(this.i + "i");
        var arr = [];
        for(var i = 0; i < this.participant_data.length; i++){
          arr.push(this.buildParticipant(this.participant_data[i] , i));
        }
        this.myForm = this.fb.group({
            participants: this.fb.array(arr)
        });
      }
   
    
    buildParticipant(participants , index): FormGroup{
      var arr2 = [];
      for(var j = 0; j < this.criteria_data.length; j++){
        arr2.push(this.buildCriteria(this.criteria_data[j] , j));
      }
      // console.log(this.criteria_data );
      // console.log(this.participant_data );
      return this.fb.group({
        id: [index +1],
        registrationNo: [participants.registrationNo],
        Othercriteria: this.fb.array(arr2)
      })
    }
    
    buildCriteria(criteria , index): FormGroup{
      return this.fb.group({
        criteriaName: criteria.criteriaName,
        marks: [''],
        max_marks: criteria.mm, 
      })
    } 

    get Participants(){
      return this.myForm.get('participants') as FormArray;
      // console.log(this.participant_data);
      // console.log(this.criteria_data);
    }
    
    // get Othercriteria(){
    //   return this.Participants.get('Othercriteria') as FormArray;
    // }
  
    
    // addCriterion() {
    //   //this.Othercriteria.push(this.fb.control(''));
    //   this.totalCriteria = this.totalCriteria  + 1;
    //   console.log(this.totalCriteria);
    //   this.arr2.push({
    //     'criteria':"0",
    //   });
    //   console.log(this.arr2);
    // }

  Edit(val){
     this.EditRowId = val;
     //console.log("function called");
     
  }


  save(formData) {
    console.log(formData.value);
    // console.log(this.criteria_data );
    // console.log(this.participant_data );
  }

}


