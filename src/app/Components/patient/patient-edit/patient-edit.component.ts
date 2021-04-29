import { formatDate } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientDetail } from 'src/app/Models/patientDetail.model';
import { ValidatorsService } from 'src/app/Services/validators.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent{

  edit: boolean=false;
  patientDetails: PatientDetail;
  patientForm: FormGroup;
  tempAge: number | null=null;
  tempDate: string | null=null;

  constructor(private fb: FormBuilder, private fv: ValidatorsService,
              private dialogRef: MatDialogRef<PatientEditComponent>,              
              @Inject(MAT_DIALOG_DATA) patientDetails: PatientDetail) {
      
      this.patientDetails= patientDetails;

      if(patientDetails.patientId) {
         this.edit= true;
         this.tempAge= this.patientDetails.age;
         this.tempDate= formatDate(this.patientDetails.dob, 'yyyy-MM-dd', 'en');
      }
      else{
        this.patientDetails.gender="Male";
      }

      this.patientForm= this.fb.group({
              patientDetail : this.fb.group({
                                  patientId: [{value: this.patientDetails.patientId, disabled: true}],
                                  fullName: this.fb.group({
                                            firstName: [this.patientDetails.firstName, [Validators.required, Validators.pattern('[a-zA-Z]+')]],
                                            lastName: [this.patientDetails.lastName, [Validators.required, Validators.pattern('[a-zA-Z]+')]]
                                  }),
                                  bioDetail: this.fb.group({
                                            gender: [this.patientDetails.gender, Validators.required],
                                            age: [{value: this.tempAge, disabled: true}, Validators.required],
                                            dob: [this.tempDate, [Validators.required, this.fv.invalidDOB.bind(this)]]
                                  }),
                                  familyStatus: this.fb.group({
                                            maritalStatus: [this.patientDetails.maritalStatus, Validators.required],
                                            religion: [this.patientDetails.religion, [Validators.required, Validators.pattern('[a-zA-Z]+')]]
                                  }),
                                  socialDetail: this.fb.group({
                                            phone: [this.patientDetails.phone, [Validators.required, Validators.pattern('[789]{1}[0-9]{9}')]],
                                            email: [this.patientDetails.email, [Validators.required, Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z]+[.]{1}[a-zA-Z]+')]]
                                  }),
                                  addressDetail: this.fb.group({
                                            nationality: [this.patientDetails.nationality, [Validators.required, Validators.pattern('[a-z A-Z]+')]],
                                            state: [this.patientDetails.state, [Validators.required, Validators.pattern('[a-z A-Z]+')]],
                                            occupation: [this.patientDetails.occupation, [Validators.required, Validators.pattern('[a-z A-Z]+')]],
                                            address: [this.patientDetails.address, Validators.required]
                                  })
                    }),
              kinDetail : this.fb.group({
                                  relativename: [this.patientDetails.relativeName, [Validators.required, Validators.pattern('[a-z A-Z]+')]],
                                  relation: [this.patientDetails.relativeRelation, [Validators.required, Validators.pattern('[a-z A-Z]+')]],
                                  relativephone: [this.patientDetails.relativePhone, [Validators.required, Validators.pattern('[789]{1}[0-9]{9}')]],
                                  relativeemail: [this.patientDetails.relativeEmail, [Validators.required, Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z]+[.]{1}[a-zA-Z]+')]],
                                  relativeoccupation: [this.patientDetails.relativeOccupation, [Validators.required, Validators.pattern('[a-z A-Z]+')]],
                                  relativeaddress: [this.patientDetails.relativeAddress, Validators.required]  
                    })
      });

  }
  

  // getters for form inputs
  get a(){ return this.patientForm.controls; }
  
  get b(){ return (this.patientForm.get('patientDetail') as FormGroup).controls; }
  get c(){ return ((this.patientForm.get('patientDetail') as FormGroup).get('fullName') as FormGroup).controls; }
  get d(){ return ((this.patientForm.get('patientDetail') as FormGroup).get('bioDetail') as FormGroup).controls; }
  get e(){ return ((this.patientForm.get('patientDetail') as FormGroup).get('familyStatus') as FormGroup).controls; }
  get f(){ return ((this.patientForm.get('patientDetail') as FormGroup).get('socialDetail') as FormGroup).controls; }
  get g(){ return ((this.patientForm.get('patientDetail') as FormGroup).get('addressDetail') as FormGroup).controls; }

  get kin(){ return (this.patientForm.get('kinDetail') as FormGroup).controls; }

  // form submit function
  onSubmit(){
    if(!this.patientForm.invalid){
    
    let choice=true;
    if(this.patientForm.dirty) choice=confirm("Submitting Patinent Form");
    
    if(choice)
      { 
        this.patientForm.enable();
        let result: PatientDetail= this.ResultRefactoring();
        this.dialogRef.close(result);
      }
    }
  }

  close(){
    let choice=true;
    if(this.patientForm.dirty) choice= confirm("Closing Without Saving changes");
    if(choice) this.dialogRef.close();
  }

  ResultRefactoring() : PatientDetail{

    let tempPatient: PatientDetail={ 
      patientId: this.b['patientId'].value,
      firstName: this.c['firstName'].value, lastName: this.c['lastName'].value,
      gender: this.d['gender'].value, age: this.d['age'].value,
      maritalStatus: this.e['maritalStatus'].value, dob: this.d['dob'].value,
      religion: this.e['religion'].value, phone: this.f['phone'].value, email: this.f['email'].value,
      nationality: this.g['nationality'].value, state: this.g['state'].value, occupation: this.g['occupation'].value, 
      address: this.g['address'].value, relativeName: this.kin['relativename'].value,
      relativeRelation: this.kin['relation'].value, relativePhone: this.kin['relativephone'].value, 
      relativeEmail: this.kin['relativeemail'].value, relativeOccupation: this.kin['relativeoccupation'].value, 
      relativeAddress: this.kin['relativeaddress'].value
    };

    return tempPatient;
  }

}
