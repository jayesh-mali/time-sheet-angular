import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  timeLogs = [];
  dates = [];
  ngOnInit() {
    this.timeLogs = this.activatedRoute.snapshot.data.timeLogs;
    this.dates = Object.keys(this.timeLogs);
  }
}
