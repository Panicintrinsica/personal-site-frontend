import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProjectStub} from '../../models/project.model';
import {Skill} from "../../models/skill.model";
import {ServerService} from "../../services/server.service";
import {Observable} from "rxjs";

@Component({
  selector: 'gui-skill-dialog',
  templateUrl: './gui-skill-dialog.component.html',
  styleUrls: ['./gui-skill-dialog.component.scss']
})
export class GuiSkillsDialogComponent implements OnInit {
  skill$: Observable<Skill> | undefined
  projects$: Observable<ProjectStub[]> | undefined

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, public server: ServerService) {}

  ngOnInit() {
    this.skill$ = this.server.getSkill(this.data)
    this.projects$ = this.server.getProjectsBySkill(this.data)
  }

}

