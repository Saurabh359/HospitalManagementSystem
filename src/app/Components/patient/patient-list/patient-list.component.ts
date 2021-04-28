import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { Patient } from 'src/app/Models/patient.model';
import { PatientDetail } from 'src/app/Models/patientDetail.model';
import { PatientDataService } from 'src/app/Services/patient-data.service';
import { PatientService } from 'src/app/Services/patient.service';
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
                              };


  @ViewChild(MatPaginator) paginator: MatPaginator;
  total:number=0;

  constructor(private patientService: PatientService,private dialog: MatDialog,
              private intl: MatPaginatorIntl, private changeDetectorRef: ChangeDetectorRef) {
    
    this.paginator=new MatPaginator(this.intl, this.changeDetectorRef);
   }

  ngOnInit(): void {
    this.dataSource.loadPatient('','asc',0,5);
    this.total=this.patientService.total;
  }
  
  ngAfterViewInit(): void {
    this.paginator.page.subscribe(()=>{
      this.dataSource.loadPatient('','asc',this.paginator.pageIndex,this.paginator.pageSize);
      this.total=this.patientService.total;      
    })
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

    dialogRef.afterClosed().subscribe(data =>{
      console.log("update data = ", data);
    });

  }


}
