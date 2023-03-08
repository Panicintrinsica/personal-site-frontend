import { Component } from '@angular/core';
import {ServerService} from "../../services/server.service";
import {map, Observable, tap} from "rxjs";
import {Project} from "../../models/project.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  project$: Observable<Project> | undefined

  constructor(server: ServerService, route: ActivatedRoute) {

    route.paramMap.subscribe(params => {
      const slug = params.get('slug')
      if(slug){
        this.project$ = server.getProjectBySlug(slug).pipe(tap(data => {
          console.log(data)

        }))
      }
    });
  }

}
