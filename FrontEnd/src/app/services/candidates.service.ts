import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate } from '../model/cadidate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  updateDetails : Candidate = {
    id : "",
    name : "",
    email : "" ,
    phone : 0,
    sex : "",
    position : "",
    dateTime : new Date()
  }

  readonly baseApiUrl = 'https://localhost:7201/api/candidate/';

  constructor(private http : HttpClient) { }

  getAllCandidates():Observable<Candidate[]>{
    return this.http.get<Candidate[]>(this.baseApiUrl);

  }

  addCandidate(addCandidateDetails : Candidate):Observable<Candidate>{
    addCandidateDetails.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Candidate>(this.baseApiUrl , addCandidateDetails);
  }

  getCandidate(id : string):Observable<Candidate>{
    return this.http.get<Candidate>(this.baseApiUrl + id);
  }

  updateCandidate(id : string , updateDetails : Candidate):Observable<Candidate>{
    return this.http.put<Candidate>(this.baseApiUrl + id , updateDetails);
  }

  deleteCandidate(id : string):Observable<Candidate>{
    return this.http.delete<Candidate>(this.baseApiUrl + id);
  }

}
