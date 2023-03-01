import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ServerService} from "../../services/server.service";
import {Observable, tap} from "rxjs";
import {Profile} from "../../models/profile.model";
import {Project} from "../../models/project.model";
import {Skill} from "../../models/skill.model";
import {Education} from "../../models/education.model";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {
  profile$: Observable<Profile>
  projects$: Observable<Project[]>
  skills$: Observable<Skill[]>
  education$: Observable<Education[]>

  projectList: Project[] = []

  currentObjective: string | null = ""
  newSkills = ['Python', 'C#', '.NET'];

  // Controls
  theme = 'bland';

  showHeader = true;
  showIntro = true;
  showContacts = true;
  showSkills = true;
  showPhoto = true;
  showInfo = true;
  showProgress = true;
  showLearning = true;
  showProjects = true;
  showEducation = true;
  showCerts = false;
  showAwards = false;
  showObjective = true;

  showEmail = true;
  showPhone = false;
  showWebsite = true;
  showLinkedIn = true;
  showGithub = true;
  showTwitter = false;
  showMastodon = true;
  showTwitch = false;
  skillDecor = 'none';
  SimpleLayout: boolean = true;

  constructor(private server: ServerService) {
    this.profile$ = server.getProfile()
    this.projects$ = server.getProjects().pipe(tap(data => {
      this.projectList = data
    }))
    this.skills$ = server.getSkillsByLevel()
    this.education$ = server.getEducation()
  }

  ngOnInit(): void {
    this.loadObjective()
  }

  saveObjective(){
    if (this.currentObjective != null)
    localStorage.setItem('CurrentObjective', this.currentObjective)
  }

  loadObjective(){
    this.currentObjective = localStorage.getItem('CurrentObjective')
  }

  projectDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projectList, event.previousIndex, event.currentIndex);
  }

  isSimple(b: boolean) {
    this.SimpleLayout = b
  }

  diffYear(startDate: number, endDate: number) {
    const start = new Date(startDate).getFullYear();
    const end = new Date(endDate).getFullYear();

    return start != end
  }
}
