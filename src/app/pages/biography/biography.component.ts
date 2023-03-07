import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';
import {Skill} from "../../models/skill.model";
import {NgxSmartModalService} from "ngx-smart-modal";
import {MatDialog} from "@angular/material/dialog";
import {ProjectDetailsDialogComponent} from "../projects/project-details-dialog.component";
import {GuiSkillsDialogComponent} from "../../components/gui-skill-dialog/gui-skill-dialog.component";

@Component({
  selector: 'app-bio',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  profile$ = this.server.getProfile()
  skills$ = this.server.getSkillsByName()
  education$ = this.server.getEducation()

  selectedSkill: Skill = {_id: "", highlight: false, level: 0, name: ""}

  constructor(private server: ServerService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewSkill(id: string) {
    this.dialog.open(GuiSkillsDialogComponent, { data: id});
  }
}
