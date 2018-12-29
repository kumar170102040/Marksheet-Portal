import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;
    public mm = 10;
    public totalCriteria = 1;
    EditRowId: any ='';
    arr2 = [{
      'criteria':"0",
    },
    {
      'criteria':"0",
    },
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
      {
        'registrationNo':"005"
      }    
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
      

      return this.fb.group({
        id: [index +1],
        registrationNo: [participants.registrationNo],
        criteria1:[''],
        Othercriteria: this.fb.array([])
      })
    }

    buildCriterion(): FormGroup{
      return this.fb.group({
        criteria:['']
      })
    }

    


    get Participants(){
      return this.myForm.get('participants') as FormArray;
    }
    get Othercriteria(){
      return this.Participants.get('Othercriteria') as FormArray;
    }
  
    
    addCriterion() {
      //  this.Othercriteria.push(this.fb.control(''));
      this.totalCriteria = this.totalCriteria  + 1;
      console.log(this.totalCriteria);
      this.arr2.push({
        'criteria':"0",
      });
      console.log(this.arr2);
    }

  Edit(val){
     this.EditRowId = val;
     //console.log("function called");
  }


  save(formData) {
    console.log(formData.value)
  }
}