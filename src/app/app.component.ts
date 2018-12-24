import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;
    participants=[
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
      }       
    ]

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        var arr = [];
        for(var i = 0; i < this.participants.length; i++){
          arr.push(this.buildParticipant(this.participants[i]));
        }
        this.myForm = this.fb.group({
            participants: this.fb.array(arr)
        });
    }

    buildParticipant(participants): FormGroup{
      return this.fb.group({
        registrationNo: [participants.registrationNo],
        criteria1:[''],
        Othercriteria: this.fb.array([])
      })
    }

    get Participants(){
      return this.myForm.get('participants') as FormArray;
    }
    get Othercriteria(){
      return this.Participants.get('Othercriteria') as FormArray;
    }
  
    
    addCriterion() {
      this.Othercriteria.push(this.fb.control(''));
    }

    initParticipants() {
        return this.fb.group({
            RegistrationNo: [''],
            criteria: this.fb.array([
              this.initCriteria()
            ])
        });
    }

    initCriteria() {
      return this.fb.group({
        number: ['']
      })
    }
    
    addParticipant() {
      const control = <FormArray>this.myForm.controls['participants'];
      control.push(this.initParticipants());
    }

  
    // addNumber(address): void {
    //   const control = <FormArray>address.controls.criteria;
    //   control.push(this.initCriteria());
    // }

    // addNumbertoAll(): void {
    //   for(var i=0; i < this.myForm.controls['participants'] ; i++)
    // }
  

  save(formData) {
    console.log(formData.value)
  }
}