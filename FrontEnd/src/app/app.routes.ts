import { Routes } from '@angular/router';
import { CandidateListComponent } from './components/candidate/candidate-list/candidate-list.component';
import { AddCandidateComponent } from './components/candidate/add-candidate/add-candidate.component';
import { EditCandiateComponent } from './components/candidate/edit-candiate/edit-candiate.component';

export const routes: Routes = [
    {
        path:'candidate',
        component: CandidateListComponent
    },
    {
        path:'candidate/add',
        component: AddCandidateComponent
    },
    {
        path:'candidate/edit/:id',
        component: EditCandiateComponent
    }
];
