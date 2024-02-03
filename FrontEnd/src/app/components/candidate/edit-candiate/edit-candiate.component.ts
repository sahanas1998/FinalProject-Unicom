import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Candidate } from '../../../model/cadidate';
import { CandidatesService } from '../../../services/candidates.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-edit-candiate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-candiate.component.html',
  styleUrl: './edit-candiate.component.css'
})
export class EditCandiateComponent implements OnInit{

  editCandidateDetails : Candidate = {
      id:"",
      name:"",
      email:"",
      phone:0,
      sex:"",
      position : "",
      dateTime : new Date()
  }

  constructor(private route : ActivatedRoute, private candidatesServices : CandidatesService ,  private router : Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params) => {
        const id = params.get('id');
        console.log(id);

        if(id) {
          this.candidatesServices.getCandidate(id)
          .subscribe({
            next : (response) => {
              this.editCandidateDetails = response;
            },
            error : (response) => {
              console.log("ddd", response);
            }
          })
        }
      }
    })
      
  }

  editCandidate(){
    this.candidatesServices.updateCandidate(this.editCandidateDetails.id, this.editCandidateDetails)
    .subscribe({
      next : (editCandidateDetails) => {
        this.router.navigate(['candidate']);
      },
      error : (response) => {
        console.log(response);
      }
    })

  }

  deleteCandidate(){
    this.candidatesServices.deleteCandidate(this.editCandidateDetails.id)
    .subscribe({
      next : (editCandidateDetails) => {
        this.router.navigate(['candidate']);
      }
    })
  }

}
