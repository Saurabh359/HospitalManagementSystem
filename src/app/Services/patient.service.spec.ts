import { TestBed } from '@angular/core/testing';
import { Patient } from '../Models/patient.model';
import { PatientDetail } from '../Models/patientDetail.model';

import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of Patients',(done: DoneFn) => {
    let patients: Patient[]= service.getPatientBrief();

    service.getAllPatient().subscribe(value => {
      expect(value).toEqual(patients);
      done();
      });
  });

  it('should return only 5 patients according to filter',(done: DoneFn)=>{
    service.findPatients('','asc',0,5).subscribe(v =>{
      expect(v.length).toEqual(5);
      done();
    });
  });
  
  it('should return only 10 patients according to filter',(done: DoneFn)=>{
    service.findPatients('','asc',0,10).subscribe(v =>{
      expect(v.length).toEqual(10);
      done();
    });
  });

  it('should return Detail of patient by id ',(done: DoneFn)=>{
    let temp: PatientDetail ={
                              patientId: 8923, firstName: 'Saurabh', lastName: 'Mehra', gender: 'Male', age: 23,
                              maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
                              phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
                              occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
                              relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
                              relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
                            };
    service.getPatientDetails(8923).subscribe(v=>{
      expect(v).toEqual(temp);
      done();
    });
  });

    

});
