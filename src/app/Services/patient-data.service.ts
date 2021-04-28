import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../Models/patient.model';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService implements DataSource<Patient>{

  private patientSubject= new BehaviorSubject<Patient[]>([]);

  constructor(private patientService: PatientService){ }
  
  loadPatient(filter: string, sortDirection: string,
               pageIndex: number, pageSize: number){

        this.patientService.findPatients(filter, sortDirection, pageIndex, pageSize)
                            .pipe( catchError(()=> of([])) )
                            .subscribe(patient=> this.patientSubject.next(patient));
    }

  connect(collectionViewer: CollectionViewer): Observable<Patient[] | readonly Patient[]> {
    
    return this.patientSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.patientSubject.complete();
  }
}
