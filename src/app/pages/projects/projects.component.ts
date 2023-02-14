import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProjectDetailsDialogComponent} from './project-details-dialog.component';
import {ServerService} from "../../server.service";
import {Observable, tap} from "rxjs";
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  project$: Observable<Project[]>

  professional: Project[] = []
  personal: Project[] = []
  openSource: Project[] = []

  constructor(public dialog: MatDialog, private server: ServerService) {
    this.project$ = this.server.getProjects().pipe(tap((result) => {
      this.professional = filterProjects(result, 'professional')
      this.personal = filterProjects(result, 'personal')
      this.openSource = filterProjects(result, 'openSource')
    }))
  }

  ngOnInit(): void {
  }

  // viewDetails(project: any){
  //   this.dialog.open(ProjectDetailsDialogComponent, {
  //     data: project,
  //   });
  // }

}

function filterProjects(array: Project[], filter: string){
  return array.filter((x => x.category === filter))
}
