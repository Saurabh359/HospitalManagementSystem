import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientListComponent } from '../patient/patient-list/patient-list.component';
import { PatientComponent } from '../patient/patient.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatDialogModule,MatToolbarModule, MatButtonModule,
        MatSidenavModule, MatIconModule, MatListModule, BrowserAnimationsModule,
        MatPaginatorModule, MatTableModule],
      declarations: [ HomeComponent, PatientComponent, PatientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should render patient-list component',()=>{
    fixture.detectChanges();

    let childComponent= fixture.nativeElement.querySelector('app-patient');
    
    expect(childComponent).toBeTruthy();
  });

  it('should display application name on toolbar',()=>{
    let element= fixture.debugElement.query(By.css('.title'));
    fixture.detectChanges();
    let ele= element.nativeElement;
    expect(ele.textContent).toBe(' Hospital Management ');
  })

  

});
