import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule,
        MatToolbarModule, MatSidenavModule, MatListModule,
        MatIconModule, MatProgressSpinnerModule, MatTableModule,
        MatSelectModule, MatFormFieldModule, MatInputModule,
        MatGridListModule, MatMenuModule, MatPaginatorModule,
        MatSnackBarModule, MatTabsModule, MatDatepickerModule,
        MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddProblemComponent } from './components/add-problem/add-problem.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { JoinGroupComponent } from './components/join-group/join-group.component';
import { ProblemsListComponent } from './components/problems-list/problems-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LongTableComponent } from './components/long-table/long-table.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';
import { SubmissionQueueComponent } from './components/submission-queue/submission-queue.component';
import { GroupsDetailsComponent } from './components/groups-details/groups-details.component';
import { AddassignmentComponent } from './components/addassignment/addassignment.component';

import { ApiConfigService } from './services/api-config.service';
import { AssignmentsService } from './services/assignments.service';
import { GroupsServiceService } from './services/groups-service.service';
import { ProblemsService } from './services/problems.service';
import { SubmissionsService } from './services/submissions.service';
import { UsersService } from './services/users.service';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';

const AppRoutes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: LoginPageComponent},
  {path: 'home', component: AllGroupsComponent},
  {
    path: 'contest', 
    component: ContestPageComponent,
    children: [
      {path: 'standings', component: StandingsComponent},
      {path: 'problem/:id', component: ProblemComponent},
      {path: 'group/:id', component: GroupsDetailsComponent},
      {path: 'problem', redirectTo: 'problems', pathMatch: 'full'}, 
      {path: 'problems', component: ProblemsInAssignmentComponent},
      {path: 'submit', component: SubmitCodeComponent},
      {path: 'submissions', component: SubmissionsComponent},
      {path: 'submission/:id', component: SubmissionDetailsComponent},
      {path: 'joingroup', component: JoinGroupComponent},
    ]
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {path: 'problems', component: ProblemsListComponent}, 
      {path: 'problem/:id', component: ProblemComponent},
      {path: 'groups', component: GroupsListComponent},
      {path: 'group/:id', component: GroupsDetailsComponent},
      {path: 'assignments', component: ProblemsListComponent},
      {path: 'queue', component: SubmissionQueueComponent},
      {path: 'users', component: ProblemsListComponent},
      {path: 'addproblem', component: AddProblemComponent},
      {path: 'addgroup', component: AddGroupComponent},
      {path: 'addassignment', component: AddassignmentComponent}
    ]
  },
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
    AllGroupsComponent,
    ToolbarComponent,
    AddProblemComponent,
    AddGroupComponent,
    JoinGroupComponent,
    ProblemsListComponent,
    DashboardComponent,
    LongTableComponent,
    GroupsListComponent,
    SubmissionQueueComponent,
    GroupsDetailsComponent,
    AddassignmentComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    FormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(AppRoutes, { enableTracing: true } )
  ],
  providers: [
    ApiConfigService,
    GroupsServiceService,
    AssignmentsService,
    ProblemsService, 
    SubmissionsService, 
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
