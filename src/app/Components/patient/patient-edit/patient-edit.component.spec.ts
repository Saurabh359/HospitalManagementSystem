import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogConfig, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgePipePipe } from 'src/app/Pipes/age-pipe.pipe';

import { PatientEditComponent } from './patient-edit.component';

describe('PatientEditComponent', () => {
  let component: PatientEditComponent;
  let fixture: ComponentFixture<PatientEditComponent>;
  let data= new MatDialogConfig();
  data.data=""; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, MatDialogModule, MatSelectModule,
               MatRadioModule, MatFormFieldModule, MatInputModule,
               MatDatepickerModule, MatNativeDateModule,BrowserAnimationsModule],
      providers:[{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: data }],
      declarations: [ PatientEditComponent ,AgePipePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form with all desired elements',()=>{
      let ele= fixture.nativeElement;

      expect(ele.querySelector('input[formControlName="patientId"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="firstName"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="lastName"]')).toBeTruthy();
      expect(ele.querySelector('mat-radio-group[formControlName="gender"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="dob"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="age"]')).toBeTruthy();
      expect(ele.querySelector('mat-select[formControlName="maritalStatus"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="religion"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="phone"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="email"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="nationality"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="state"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="occupation"]')).toBeTruthy();
      expect(ele.querySelector('textarea[formControlName="address"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="relativename"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="relation"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="relativephone"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="relativeemail"]')).toBeTruthy();
      expect(ele.querySelector('input[formControlName="relativeoccupation"]')).toBeTruthy();
      expect(ele.querySelector('textarea[formControlName="relativeaddress"]')).toBeTruthy();
  });

  it('should return model invalid when form is empty', () => {
    expect(component.patientForm.invalid).toBeTruthy();
  });

  it('should validate for required Validation', () => {
    let form = component.patientForm;
  
    expect(form.hasError('required',['patientDetail','fullName','firstName'])).toBeTruthy();
    expect(form.hasError('required',['patientDetail','fullName','lastName'])).toBeTruthy();
    expect(form.hasError('required',['patientDetail','bioDetail','gender'])).toBeFalsy();
    expect(form.hasError('required',['patientDetail','bioDetail','age'])).toBeFalsy();
    expect(form.hasError('required',['patientDetail','bioDetail','dob'])).toBeTruthy();
    expect(form.hasError('required',['patientDetail','familyStatus','maritalStatus'])).toBeTruthy();
    expect(form.hasError('required',['patientDetail','familyStatus','religion'])).toBeTruthy();
    expect(form.hasError('required',['patientDetail','socialDetail','phone'])).toBeTruthy();
    expect(form.hasError('required',['patientDetail','socialDetail','email'])).toBeTruthy();
    expect(form.hasError('required',['patientDetail','addressDetail','nationality'])).toBeTruthy();
    expect(form.hasError('required',['patientDetail','addressDetail','state'])).toBeTruthy();
    expect(form.hasError('required',['patientDetail','addressDetail','occupation'])).toBeTruthy();
    expect(form.hasError('required',['patientDetail','addressDetail','address'])).toBeTruthy();
    
    expect(form.hasError('required',['kinDetail','relativename'])).toBeTruthy();
    expect(form.hasError('required',['kinDetail','relation'])).toBeTruthy();
    expect(form.hasError('required',['kinDetail','relativephone'])).toBeTruthy();
    expect(form.hasError('required',['kinDetail','relativeemail'])).toBeTruthy();
    expect(form.hasError('required',['kinDetail','relativeaddress'])).toBeTruthy();
    expect(form.hasError('required',['kinDetail','relativeoccupation'])).toBeTruthy();

    expect(form.valid).toBeFalsy();
  });

  it('should validate for pattern validation',()=>{

    let form= component.patientForm;
    form.patchValue({
      'patientDetail':{
                        'fullName': {
                                      'firstName':'test@',
                                      'lastName':'test12'
                                    },
                        'familyStatus': {
                                        'religion':'test12'
                                    },
                        'socialDetail': {
                                        'phone':'97test',
                                        'email':'@test'
                                    },
                        'addressDetail':{
                                        'nationality':'test12',
                                        'state':'test4@',
                                        'occupation':'test@'
                                    }          
                      },
        'kinDetail':{
                      'relativename':'test12',
                      'relation':'test12',
                      'relativephone':'test12',
                      'relativeemail':'test12',
                      'relativeoccupation':'test12'  
        }
    });
    
    expect(form.hasError('pattern',['patientDetail','fullName','firstName'])).toBeTruthy();
    expect(form.hasError('pattern',['patientDetail','fullName','lastName'])).toBeTruthy();
    expect(form.hasError('pattern',['patientDetail','familyStatus','religion'])).toBeTruthy();
    expect(form.hasError('pattern',['patientDetail','socialDetail','phone'])).toBeTruthy();
    expect(form.hasError('pattern',['patientDetail','socialDetail','email'])).toBeTruthy();
    expect(form.hasError('pattern',['patientDetail','addressDetail','nationality'])).toBeTruthy();
    expect(form.hasError('pattern',['patientDetail','addressDetail','state'])).toBeTruthy();
    expect(form.hasError('pattern',['patientDetail','addressDetail','occupation'])).toBeTruthy();

    expect(form.hasError('pattern',['kinDetail','relativename'])).toBeTruthy();
    expect(form.hasError('pattern',['kinDetail','relation'])).toBeTruthy();
    expect(form.hasError('pattern',['kinDetail','relativephone'])).toBeTruthy();
    expect(form.hasError('pattern',['kinDetail','relativeemail'])).toBeTruthy();
    expect(form.hasError('pattern',['kinDetail','relativeoccupation'])).toBeTruthy();

  });

  it('should calculate age from date of birth ', () => {
    
    let hostElement = fixture.nativeElement;
    let dateInput: HTMLInputElement = hostElement.querySelector('input[formControlName="dob"]');
    let ageDisplay: HTMLInputElement = hostElement.querySelector('input[formControlName="age"]');
  
    dateInput.value = '3/15/2000';
    
    fixture.detectChanges();
    
    dateInput.dispatchEvent(new Event('input'));
    ageDisplay.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();
  
    expect(ageDisplay.value).toEqual('21');
  });

});