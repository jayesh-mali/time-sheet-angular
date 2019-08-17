import { Injectable, Injector } from '@angular/core';

import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TimelogService } from '../service/timelog.service';

@Injectable()
export class TimeLogResolverEntries implements Resolve<any> {
  constructor(public timelogService:TimelogService) {}

  resolve(route:ActivatedRouteSnapshot) {
    return this.timelogService.getAll();     
  }
}