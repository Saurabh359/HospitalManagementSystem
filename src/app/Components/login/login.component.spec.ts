import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
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
    let template= fixture.debugElement.nativeElement;
    let ele= template.querySelector('h1');

    expect(ele.textContent).toEqual('HOSPITAL MANAGEMENT LOGIN PAGE');
  });

  it('should render form with Username and Password and other inputs ', () => {
    const element = fixture.nativeElement;

    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('input[name="username"]')).toBeTruthy();
    expect(element.querySelector('input[name="password"]')).toBeTruthy();
    expect(element.querySelector('button[type="submit"]')).toBeTruthy();
    expect(element.querySelector('mat-checkbox')).toBeTruthy();
    expect(element.querySelector('a[href="#"]')).toBeTruthy();
  });


});
