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

  constructor() { 
  }

  getAllPatient(): Observable<Patient[]>{

    let patientList: Patient[] = this.getPatientBrief();
    this.total=this.patientDetail.length;

    return new Observable<Patient[]>(obs => {
      obs.next(patientList);
    });
 
    //return this.http.get<Patient[]>('/api/patients');
  }

  findPatients(filter='', sortOrder='asc',
              pageNumber=0, pageSize= 5): Observable<Patient[]>
  {
    this.total=this.patientDetail.length;
    let patient: Patient[] = this.getPatientBrief();

    let start=pageNumber * pageSize;
    let n= start+pageSize;
    let end= (n < patient.length)? n : patient.length;
    let temp= patient.slice(start , end);

    return new Observable<Patient[]>(obs=> {
        obs.next(temp);
    });

      // return this.http.get<Patient[]>('api/patients',{
      //   params: new HttpParams()
      //           .set('filter',filter)
      //           .set('sortOrder',sortOrder)
      //           .set('pageNumber',pageNumber.toString())
      //           .set('pageSize',pageSize.toString())
      //   });
  
  }

  getPatientDetails(id: number):Observable<PatientDetail>{

    return new Observable<PatientDetail>(obs=>{
        let temp= this.patientDetail.find(o=> o.patientId == id);
        obs.next(temp);
    });

    /*
      return this.http.get<Patient>('api/patients',{ params: new HttpParams().set('id', id) });

    */
    
  }

  addNewPatient(data: PatientDetail): boolean{
     
    try{

      let id: number= this.patientDetail[this.patientDetail.length-1].patientId + 1;
      data.patientId= id;

      this.patientDetail.push(data);
      return true;

    }catch(e){
      return false;
    }
      
    /*
      let result: boolean=false; 
      this.http.post<boolean>('api/patient', data).pipe(take(1)).subscribe(d =>{ result=d });
      return result;
    */
  }

  updatePatient(data: PatientDetail): boolean{
     
    try{

      let i: number = this.patientDetail.findIndex(o=> o.patientId == data.patientId);
      this.patientDetail[i]=data;

      return true;

    }catch(e){
      return false;
    }
        
  }

  getPatientBrief(): Patient[]{
    
    let patientList: Patient[]=[];

    this.patientDetail.forEach(data=> patientList.push({patientId: data.patientId,
                                                        name: data.firstName+" "+data.lastName,
                                                        contact: data.phone}));
    return patientList;                                                    
  }
  
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
    },
    {
      patientId: 8927, firstName: 'Aryan', lastName: 'Obroy', gender: 'Male', age: 23,
      maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
      phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
      occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
      relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
      relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
    },
    {
      patientId: 8928, firstName: 'Kratika', lastName: 'Bisht', gender: 'Female', age: 23,
      maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
      phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
      occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
      relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
      relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
    },
    {
      patientId: 8929, firstName: 'Rekha', lastName: 'Bora', gender: 'Female', age: 23,
      maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
      phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
      occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
      relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
      relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
    },
    {
      patientId: 8930, firstName: 'Payal', lastName: 'Verma', gender: 'Female', age: 23,
      maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
      phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
      occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
      relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
      relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
    },
    {
      patientId: 8931, firstName: 'Priya', lastName: 'Singh', gender: 'Female', age: 23,
      maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
      phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
      occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
      relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
      relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
    },
    {
      patientId: 8932, firstName: 'Rohit', lastName: 'Sharma', gender: 'Male', age: 23,
      maritalStatus: 'Single', dob: new Date(Date.parse("February 14, 1999")), religion: 'Hindu',
      phone: '7412067123', email: 'saurabh123@gmail.com', nationality: 'Indian', state: 'Uttarakhand',
      occupation: 'Software Engineer', address: 'C/o- J S Mehra, Vill- abcd', relativeName: 'Suresh Verma', 
      relativeRelation: 'Maternal Uncle', relativePhone: '8934527831', relativeEmail: 'suresh123@gmail.com', 
      relativeOccupation: 'Software Engineer', relativeAddress:'C/o- V K Verma, Vill- abcd, Vill- abcd'
    }
  ];

}
