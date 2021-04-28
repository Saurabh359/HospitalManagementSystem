import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../Models/patient.model';
import { map } from 'rxjs/operators'; 
import { PatientDetail } from '../Models/patientDetail.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  total: number=0;

  patient: Patient[]=[
    {patientId: 8923, name: 'saurabh mehra', contact: '7412067123'},
    {patientId: 8924, name: 'radhika madan', contact: '9834513421'},
    {patientId: 8925, name: 'karan sharma', contact: '8934671232'},
    {patientId: 8926, name: 'siya gupta', contact: '9503126735'},
    {patientId: 8927, name: 'aryan obroy', contact: '9965894321'},
    {patientId: 8928, name: 'kratika bisht', contact: '9834513426'},
    {patientId: 8929, name: 'rekha bora', contact: '8934671232'},
    {patientId: 8930, name: 'payal verma', contact: '9503126735'},
    {patientId: 8931, name: 'priya singh', contact: '9965894321'},
    {patientId: 8932, name: 'rohit sharma', contact: '9834513421'},
  ];

  patientDetail: PatientDetail[]=[
    {
      patientId: 8923, firstName: 'Saurabh', lastName: 'Mehra', gender: 'Male', age: 23,
      maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
      phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
      occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
      relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
      relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
    },
    {
      patientId: 8924, firstName: 'Radhika', lastName: 'Madan', gender: 'Female', age: 23,
      maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
      phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
      occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
      relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
      relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
    },
    {
      patientId: 8925, firstName: 'Karan', lastName: 'Sharma', gender: 'Male', age: 23,
      maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
      phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
      occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
      relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
      relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
    },
    {
      patientId: 8926, firstName: 'Siya', lastName: 'Gupta', gender: 'Female', age: 23,
      maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
      phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
      occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
      relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
      relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
    }
  ]

  constructor(private http: HttpClient) { 
  }

  getAllPatient(): Observable<Patient[]>{

    
    return new Observable<Patient[]>(obs => {
      this.total=this.patient.length;
      obs.next(this.patient);
    });
 
    //return this.http.get<Patient[]>('/api/patients');
  }

  findPatients(filter='', sortOrder='asc',
              pageNumber=0, pageSize= 5): Observable<Patient[]>
  {
    let start=pageNumber * pageSize;
    let n= start+pageSize;
    let end= (n < this.patient.length)? n : this.patient.length;
    let temp= this.patient.slice(start , end);

    return new Observable<Patient[]>(obs=> {
        this.total=this.patient.length;
        obs.next(temp);
    });

      // return this.http.get<Patient[]>('api/patients',{
      //   params: new HttpParams()
      //           .set('filter',filter)
      //           .set('sortOrder',sortOrder)
      //           .set('pageNumber',pageNumber.toString())
      //           .set('pageSize',pageSize.toString())
      //   }).pipe( map(res => res) );
  
  }

  getPatientDetails(id: number):Observable<PatientDetail>{

    return new Observable<PatientDetail>(obs=>{
        let temp= this.patientDetail.find(o=> o.patientId == id);
        obs.next(temp);
    });
    
  }


}
