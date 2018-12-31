import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;
    public totalCriteria = 1;
    EditRowId: any ='';
   

    criteria_data = [{
      'criteriaName':"criteria1",
      'mm':'100'
    },
    {
      'criteriaName':"criteria2",
      'mm':'100'
    },
    {
      'criteriaName':"criteria3",
      'mm':'100'
    }
  
    ];

    participant_data=[
      {
        'registrationNo':"001"
      },
      {
        'registrationNo':"002"
      },
      {
        'registrationNo':"003"
      },
      {
        'registrationNo':"004"
      },   
   
    ]
    

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
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
    console.log(formData.value)
  }


 

}