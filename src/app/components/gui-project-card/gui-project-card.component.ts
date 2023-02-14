import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../models/project.model';
import {MatDialog} from '@angular/material/dialog';
import {ProjectDetailsDialogComponent} from '../../pages/projects/project-details-dialog.component';

@Component({
  selector: 'gui-project-card',
  templateUrl: './gui-project-card.component.html',
  styleUrls: ['./gui-project-card.component.scss']
})
export class GuiProjectCardComponent implements OnInit {
  currentdate = Date.now()

  @Input() project: Project = {
    _id: "",
    category: "",
    company: "",
    endDate: 0,
    features: "",
    hasDetails: false,
    hasLink: false,
    isCurrent: false,
    longDescription: "",
    name: "",
    photo: "",
    shortDescription: "",
    skills: [{display: "", value: ""}],
    stack: "",
    startDate: 0,
    title: "",
    type: "",
    url: ""
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showDetails() {
    const dialogRef = this.dialog.open(ProjectDetailsDialogComponent, { data: this.project});
  }
}
