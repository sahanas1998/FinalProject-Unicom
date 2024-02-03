import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Candidate } from '../../../model/cadidate';
import { CandidatesService } from '../../../services/candidates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-candidate',
  standalone: true,
  imports: [FormsModule , RouterModule , ],
  templateUrl: './add-candidate.component.html',
  styleUrl: './add-candidate.component.css'
})
export class AddCandidateComponent implements OnInit {

  addCandidateDetails : Candidate ={ 
      id:"",
      name:"",
      email:"",
      phone:0,
      sex:"",
      position : "", 
      dateTime : new Date()
  }

  constructor(private candidatesServices : CandidatesService , private router : Router){}

  ngOnInit(): void {
      
  }

  addCandidate(){
    this.candidatesServices.addCandidate(this.addCandidateDetails)
    .subscribe({
      next : (addCandidateDetails) => {
        console.log(addCandidateDetails);
        this.router.navigate(['candidate']);
      },
      error : (response) => {
        console.log(response);

      }
    })
  }

}
