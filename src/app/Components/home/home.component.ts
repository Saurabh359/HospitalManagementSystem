import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PatientDetail } from 'src/app/Models/patientDetail.model';
import { PatientEditComponent } from '../patient/patient-edit/patient-edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tempPatient: PatientDetail={  patientId: 0,
                                firstName: '',
                                lastName: '',
                                gender: '',
                                age: 0,
                                maritalStatus: '',
                                dob: new Date(),
                                religion: '',
                                phone: '',
                                email: '',
                                nationality: '',
                                state: '',
                                occupation: '',
                                address: '',
                                relativeName: '',
                                relativeRelation: '',
                                relativePhone: '',
                                relativeEmail: '',
                                relativeOccupation: '',
                                relativeAddress:''
                              }
                                
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  addPatient(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose= true;
    dialogConfig.autoFocus= true;

    dialogConfig.data= this.tempPatient;

    const dialogRef=this.dialog.open(PatientEditComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(data =>{
      console.log("New Patient added = ", data);
    });


  }

}
