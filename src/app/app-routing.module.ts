import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PatientListComponent } from './Components/patient/patient-list/patient-list.component';
import { PatientComponent } from './Components/patient/patient.component';
import { AuthGuardService } from './Services/Guard-Services/auth-guard.service';

const routes: Routes = [
  {
    path:'', 
    component: LoginComponent, 
    pathMatch: 'full'
  },
  {
    path:'home', 
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'patient', 
    component: PatientComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
