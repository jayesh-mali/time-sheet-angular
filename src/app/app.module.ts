import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimelogsComponent } from './timelogs/timelogs.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './service/project.service';
import { TimelogService } from './service/timelog.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    TimelogsComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ProjectService,
    TimelogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
