import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule,
        MatToolbarModule, MatSidenavModule, MatListModule,
        MatIconModule, MatProgressSpinnerModule, MatTableModule,
        MatSelectModule, MatFormFieldModule, MatInputModule,
        MatGridListModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ProblemsInAssignmentComponent } from './components/problems-in-assignment/problems-in-assignment.component';
import { StandingsComponent } from './components/standings/standings.component';
import { SubmitCodeComponent } from './components/submit-code/submit-code.component';
import { ProblemComponent } from './components/problem/problem.component';
import { SubmissionsComponent } from './components/submissions/submissions.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ContestPageComponent } from './components/contest-page/contest-page.component';
import { SubmissionDetailsComponent } from './components/submission-details/submission-details.component';
import { AllGroupsComponent } from './components/all-groups/all-groups.component';

const AppRoutes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: AllGroupsComponent},
  {
    path: 'contest', 
    component: ContestPageComponent,
    children: [
      {path: 'standings', component: StandingsComponent},
      {path: 'problem/:id', component: ProblemComponent},
      {path: 'problem', redirectTo: 'problems', pathMatch: 'full'}, 
      {path: 'problems', component: ProblemsInAssignmentComponent},
      {path: 'submit', component: SubmitCodeComponent},
      {path: 'submissions', component: SubmissionsComponent},
      {path: 'submission/:id', component: SubmissionDetailsComponent},
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProblemsInAssignmentComponent,
    StandingsComponent,
    SubmitCodeComponent,
    ProblemComponent,
    SubmissionsComponent,
    LoginPageComponent,
    ContestPageComponent,
    SubmissionDetailsComponent,
    AllGroupsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    RouterModule.forRoot(AppRoutes, { enableTracing: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
