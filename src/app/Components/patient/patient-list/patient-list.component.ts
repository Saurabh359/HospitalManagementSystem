import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { Patient } from 'src/app/Models/patient.model';
import { PatientDetail } from 'src/app/Models/patientDetail.model';
import { NotifyUpdateService } from 'src/app/Services/notify-update.service';
import { PatientDataService } from 'src/app/Services/patient-data.service';
import { PatientService } from 'src/app/Services/patient.service';
import { ShowalertService } from 'src/app/Services/showalert.service';
import { PatientEditComponent } from '../patient-edit/patient-edit.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit , AfterViewInit{

  patient: Patient[]=[];
  dataSource: PatientDataService= new PatientDataService(this.patientService);
  displayedColumns= ['patientId', 'name', 'contact','action'];

  tempPatient: PatientDetail={  patientId: 0, firstName: '', lastName: '', gender: '', age: 0,
                                maritalStatus: '', dob: new Date(), religion: '', phone: '', email: '',
                                nationality: '', state: '', occupation: '', address: '', relativeName: '',
                                relativeRelation: '', relativePhone: '', relativeEmail: '',
                                relativeOccupation: '', relativeAddress:''
                              };


  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  total:number=0;

  constructor(private patientService: PatientService,private dialog: MatDialog,
              private intl: MatPaginatorIntl, private changeDetectorRef: ChangeDetectorRef,
              private notifyUpdate: NotifyUpdateService) {
    
    this.paginator=new MatPaginator(this.intl, this.changeDetectorRef);

    this.notifyUpdate.notify.subscribe(()=>{
        this.dataActions('','asc',0,5);
    });
   }

  ngOnInit(): void {
    this.dataActions('','asc',0,5);
  }
  
  ngAfterViewInit(): void {
    this.paginator.page.subscribe(()=>{
      this.dataActions('','asc',this.paginator.pageIndex,this.paginator.pageSize);      
    });
  }

  dataActions(a: string,b: string, c: number,d: number):void{
    this.dataSource.loadPatient(a,b,c,d);
    this.paginator.pageIndex= c;
    this.paginator.pageSize= d;
    this.total=this.patientService.total;      
  }

  editPatient(id : number){
    
    this.patientService.getPatientDetails(id).subscribe(data=>{
        this.tempPatient=data;
    });
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose= true;
    dialogConfig.autoFocus= true;

    dialogConfig.data= this.tempPatient;

    const dialogRef=this.dialog.open(PatientEditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: PatientDetail) =>{
      if(data) {
        let res=this.patientService.updatePatient(data);
        
        let msg=" Something went wrong";
        let type="error";
        if(res){
            this.notifyUpdate.notify.next();
            msg=" Patient Data Updated Successfully";
            type="success";
        }
        this.notifyUpdate.alertNotify.next({msg,type});
      }
    });

  }


}
