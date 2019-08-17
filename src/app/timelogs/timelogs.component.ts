import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimelogService } from '../service/timelog.service';

@Component({
  selector: 'app-timelogs',
  templateUrl: './timelogs.component.html',
  styleUrls: ['./timelogs.component.css']
})
export class TimelogsComponent implements OnInit {

  timeLogEntries:Array<any> = [];
  timeLogObject:any;
  projectList = [];
  constructor(private activatedRoute: ActivatedRoute, private timelogService: TimelogService, private router: Router) { }

  ngOnInit() {
    this.projectList = this.activatedRoute.snapshot.data.projectList;
    this.timeLogObject = {
        "description": null,
        "project_id": null,
        "hours":null
    }    
    this.timeLogEntries.push(Object.assign({}, this.timeLogObject));
  }

  addEntry(){
    this.timeLogEntries.push(Object.assign({}, this.timeLogObject));
  }

  saveEntries(){
    let processedTimeLogEntries = this.processTimeLogEntries();
    if(processedTimeLogEntries.length==0){
      alert("Please make some entries before save.");
      return;
    }
    let obj = {
      "time_logs":processedTimeLogEntries
    }
    this.timelogService.save(obj).subscribe((res) => {
      this.router.navigate(['/timesheet']);
    }, (badResponse) => {
      console.log("badResponse");
      console.log(badResponse);
    });
  }

  processTimeLogEntries(){
    return this.timeLogEntries.filter(obj => {
      return obj.hours != null && obj.project_id!=null;
    })
  }

  removeEntry(index){
    this.timeLogEntries.splice(index,1);
  }

  redirectToTimesheet(){
    this.router.navigate(['/timesheet']);
  }
  

}
