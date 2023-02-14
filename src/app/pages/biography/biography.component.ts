import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';

@Component({
  selector: 'app-bio',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  profile$ = this.server.getProfile()
  skills$ = this.server.getSkillsByName()
  education$ = this.server.getEducation()

  constructor(private server: ServerService) { }

  ngOnInit(): void {
  }

}
