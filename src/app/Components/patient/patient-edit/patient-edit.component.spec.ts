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
});
