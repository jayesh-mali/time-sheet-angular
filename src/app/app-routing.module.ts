import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimelogsComponent } from './timelogs/timelogs.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { TimeLogResolverEntries } from './resolver/time-log-entries.resolver';
import { ProjectListResolver } from './resolver/project-list.resolver';


const routes: Routes = [
  { path: '', redirectTo: 'timesheet', pathMatch: 'full' },
  { 
    path: 'timesheet',
    component: TimesheetComponent,
    resolve: { timeLogs: TimeLogResolverEntries }
  },
  {
    path: 'time-logs',
    component: TimelogsComponent,
    resolve: { projectList: ProjectListResolver }
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    TimeLogResolverEntries,
    ProjectListResolver
  ]
})
export class AppRoutingModule { }
