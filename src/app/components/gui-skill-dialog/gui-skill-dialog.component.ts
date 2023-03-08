import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProjectStub} from '../../models/project.model';
import {Skill} from "../../models/skill.model";
import {ServerService} from "../../services/server.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'gui-skill-dialog',
  templateUrl: './gui-skill-dialog.component.html',
  styleUrls: ['./gui-skill-dialog.component.scss']
})
export class GuiSkillsDialogComponent implements OnInit {
  skill$: Observable<Skill> | undefined
  projects$: Observable<ProjectStub[]> | undefined

  constructor
  (@Inject(MAT_DIALOG_DATA) public data: string,
   public server: ServerService,
   private router: Router,
   private dialogRef: MatDialogRef<GuiSkillsDialogComponent>
  ) {}

  ngOnInit() {
    this.skill$ = this.server.getSkill(this.data)
    this.projects$ = this.server.getProjectsBySkill(this.data)
  }

  goToProject(project: ProjectStub) {
    this.router.navigateByUrl(`project/${project.slug}`);
    this.dialogRef.close()
  }
}

