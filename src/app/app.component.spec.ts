import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HospitalManagementSystem'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HospitalManagementSystem');
  });

  it('should have router-outlet', () => {
    expect(fixture.nativeElement.querySelector('router-outlet')).not.toBeNull();
  });

});
