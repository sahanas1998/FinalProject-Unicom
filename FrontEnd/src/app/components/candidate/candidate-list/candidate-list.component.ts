import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../../model/cadidate';
import { CommonModule } from '@angular/common';
import { CandidatesService } from '../../../services/candidates.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [CommonModule , HttpClientModule , RouterModule],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.css'
})
export class CandidateListComponent implements OnInit{

  candidates : Candidate[] = [];

  constructor(private candidatesService : CandidatesService){}

  ngOnInit(): void {
    this.candidatesService.getAllCandidates()
    .subscribe({
      next : (candidates) => {
        console.log(candidates);
        this.candidates = candidates;
      },
      error : (response) => {
        console.log(response);
      }
    });

  } 

}
