import { Injectable, Injector  } from '@angular/core';

import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ProjectService } from '../service/project.service';

@Injectable()
export class ProjectListResolver implements Resolve<any> {
  constructor(public projectService:ProjectService) {}

  resolve(route:ActivatedRouteSnapshot) {
    return this.projectService.getProjectList();     
  }
}