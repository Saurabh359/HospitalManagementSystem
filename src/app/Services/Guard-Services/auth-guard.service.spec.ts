import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

   beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if user is not loggedIn',()=>{
    let route!: ActivatedRouteSnapshot;
    let state!: RouterStateSnapshot;
    expect(service.canActivate(route, state)).toBe(true);
  });
});
