import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from 'protractor';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, MatCardModule, MatIconModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,BrowserAnimationsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render title',()=>{
    fixture.detectChanges();
    let template= fixture.nativeElement;
    let ele= template.querySelector('h1');

    expect(ele.textContent).toEqual('HOSPITAL MANAGEMENT LOGIN PAGE');
  });

  
  it('should display a small section after title',()=>{

    let ele= fixture.nativeElement.querySelector('p');

    expect(ele.textContent).toBe('Home | Hospital Management Login Page');
  });


  it('should render form with Username and Password and other inputs ', () => {
    let element = fixture.nativeElement;

    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('input[name="username"]')).toBeTruthy();
    expect(element.querySelector('input[name="password"]')).toBeTruthy();
    expect(element.querySelector('button[type="submit"]')).toBeTruthy();
    expect(element.querySelector('mat-checkbox')).toBeTruthy();
    expect(element.querySelector('a[href="#"]')).toBeTruthy();
  });

});
