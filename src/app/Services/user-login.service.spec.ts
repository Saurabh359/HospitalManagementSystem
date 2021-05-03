import { TestBed } from '@angular/core/testing';

import { UserLoginService } from './user-login.service';

describe('UserLoginService', () => {
  let service: UserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if username and password both are "admin" ',()=>{
    let username= "admin";
    let password= "admin";
    let result = service.SignIn(username, password);
    expect(result).toEqual(true);
  });
  
  it('should return false if any of username and password is not "admin" ',()=>{
    let username= "admin";
    let password= "something";
    let result = service.SignIn(username, password);
    expect(result).toEqual(false);
  });

  
});
