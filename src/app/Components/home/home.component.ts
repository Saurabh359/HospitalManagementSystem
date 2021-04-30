import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PatientDetail } from 'src/app/Models/patientDetail.model';
import { NotifyUpdateService } from 'src/app/Services/notify-update.service';
import { PatientService } from 'src/app/Services/patient.service';
import { ShowalertService } from 'src/app/Services/showalert.service';
import { PatientEditComponent } from '../patient/patient-edit/patient-edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tempPatient: PatientDetail={  patientId: 0, firstName: '', lastName: '', gender: '', age: 0,
                                maritalStatus: '', dob: new Date(), religion: '', phone: '', email: '',
                                nationality: '', state: '', occupation: '', address: '', relativeName: '',
                                relativeRelation: '', relativePhone: '', relativeEmail: '',
                                relativeOccupation: '', relativeAddress:''
                              };
  
  @ViewChild("placeholder",{read: ViewContainerRef}) alertContainer!: ViewContainerRef;
                      
  constructor(private dialog: MatDialog, private notifyUpdate: NotifyUpdateService,
              private patientService: PatientService,
              private showAlert: ShowalertService) {

                this.notifyUpdate.alertNotify.subscribe(ob=>{   
                     this.showAlert.showAlert(ob.msg,ob.type,this.alertContainer);
                });
              }

  ngOnInit(): void {
  }

  addPatient(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose= true;
    dialogConfig.autoFocus= true;

    dialogConfig.data= this.tempPatient;

    const dialogRef=this.dialog.open(PatientEditComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe((data: PatientDetail )=>{
      if(data){
        let res= this.patientService.addNewPatient(data);
        let msg=" Something went wrong";
        let type= "error";
        if(res){
            this.notifyUpdate.notify.next();
            msg=" New Patient Added Successfully";
            type="success";
        }

        this.notifyUpdate.alertNotify.next({msg,type});
      }
    });


  }

}
